﻿using Newtonsoft.Json.Linq;
using System.Diagnostics;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Http.WebSockets;
using TouchSocket.JsonRpc;
using TouchSocket.Rpc;
using TouchSocket.Sockets;

namespace ReverseJsonRpcConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var service = GetService();
            var client = GetClient();

            Console.ReadKey();
        }

        static WebSocketJsonRpcClient GetClient()
        {
            var jsonRpcClient = new WebSocketJsonRpcClient();
            jsonRpcClient.Setup(new TouchSocketConfig()
                .ConfigurePlugins(a =>
                {
                    a.UseGlobalRpcStore()
                    .ConfigureRpcStore(store =>
                    {
                        store.RegisterServer<ReverseJsonRpcServer>();
                    });
                })
                .SetRemoteIPHost("ws://127.0.0.1:7707/ws"));//此url就是能连接到websocket的路径。
            jsonRpcClient.Connect();

            return jsonRpcClient;
        }

        static HttpService GetService()
        {
            var service = new HttpService();

            service.Setup(new TouchSocketConfig()
                 .SetListenIPHosts(7707)
                 .ConfigurePlugins(a =>
                 {
                     a.UseWebSocket()
                     .SetWSUrl("/ws");

                     a.UseWebSocketJsonRpc()
                     .SetAllowJsonRpc((socketClient, context) =>
                     {
                         //此处的作用是，通过连接的一些信息判断该ws是否执行JsonRpc。
                         //当然除了此处可以设置外，也可以通过socketClient.SetJsonRpc(true)直接设置。
                         return true;
                     });

                     a.Add<MyPluginClass>();
                 }));
            service.Start();
            return service;
        }
    }

    class MyPluginClass : PluginBase, IWebSocketHandshakedPlugin<IHttpSocketClient>
    {
        public async Task OnWebSocketHandshaked(IHttpSocketClient client, HttpContextEventArgs e)
        {
            try
            {
                //获取JsonRpcActionClient，用于执行反向Rpc
                var jsonRpcClient = client.GetJsonRpcActionClient();

                var result = await jsonRpcClient.InvokeTAsync<int>("Add", InvokeOption.WaitInvoke, 10, 20);
                Console.WriteLine(result);


                //Stopwatch stopwatch = Stopwatch.StartNew();
                //for (int i = 0; i < 10000; i++)
                //{
                //    //调用Rpc，此处可以使用代理
                //    var result = await jsonRpcClient.InvokeTAsync<int>("Add", InvokeOption.WaitInvoke, 10, 20);
                //}
                //stopwatch.Stop();
                //Console.WriteLine(stopwatch.Elapsed);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }


            await e.InvokeNext();
        }
    }

    public class ReverseJsonRpcServer : RpcServer
    {
        [JsonRpc(MethodInvoke = true)]
        public int Add(int a, int b)
        {
            return a + b;
        }
    }
}