﻿using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using TouchSocket.Core;
using TouchSocket.Dmtp;
using TouchSocket.Dmtp.Rpc;
using TouchSocket.Rpc;
using TouchSocket.Rpc.Generators;
using TouchSocket.Sockets;

namespace DmtpRpcConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var service = GetService();
                var client = GetClient();
                while (true)
                {
                    Console.WriteLine("请输入账号和密码，用空格隔开。");
                    var strs = Console.ReadLine()?.Split(" ");
                    if (strs == null || strs.Length != 2)
                    {
                        Console.WriteLine("无效输入");
                        continue;
                    }

                    var result = client.GetDmtpRpcActor().Login(strs[0], strs[1]);
                    Console.WriteLine($"结果：{result}");
                }
            }
            catch(Exception ex)
            {
                ConsoleLogger.Default.Exception(ex);
                Console.ReadKey();
            }
           
        }
        static TcpDmtpClient GetClient()
        {
            var client = new TcpDmtpClient();
            client.Setup(new TouchSocketConfig()
                .SetContainer(new MyContainer())
                .ConfigureContainer(a =>
                {
                    a.AddConsoleLogger();
                })
                .SetRemoteIPHost("127.0.0.1:7789")
                .ConfigurePlugins(a =>
                {
                    a.UseDmtpRpc();
                })
                .SetVerifyToken("Rpc"));
            client.Connect();
            client.Logger.Info($"客户端已连接");
            return client;
        }
        static TcpDmtpService GetService()
        {
            var service = new TcpDmtpService();
            var config = new TouchSocketConfig()//配置
                   .SetListenIPHosts(7789)
                   .SetContainer(new MyContainer())
                   .ConfigureContainer(a => 
                   {
                       a.AddConsoleLogger();
                   })
                   .ConfigurePlugins(a =>
                   {
                       a.UseDmtpRpc()
                       .ConfigureRpcStore(store =>
                       {
                           store.RegisterServer<IMyRpcServer, MyRpcServer>();//注册服务
                       });
                   })
                   .SetVerifyToken("Rpc");

            service.Setup(config)
                .Start();

            service.Logger.Info($"{service.GetType().Name}已启动");
            return service;
        }
    }

    #region Rpc服务
    [GeneratorRpcProxy]
    [AutoInjectForSingleton(ToType =typeof(MyRpcServer))]
    public interface IMyRpcServer : IRpcServer
    {
        [GeneratorRpcMethod(InvokeKey = "Login")]
        [DmtpRpc("Login")]//服务注册的函数键，此处为显式指定。默认不传参的时候，为该函数类全名+方法名的全小写。
        [Description("登录")]//服务描述，在生成代理时，会变成注释。
        bool Login(string account, string password);
    }

    
    [GeneratorRpcServer]
    public partial class MyRpcServer : IMyRpcServer
    {
        public bool Login(string account, string password)
        {
            if (account == "123" && password == "abc")
            {
                return true;
            }

            return false;
        }
    }

    #endregion

    #region IOC
    /// <summary>
    /// IOC容器
    /// </summary>
    [AddSingletonInject(typeof(IPluginsManager), typeof(PluginsManager))]
    [AddSingletonInject(typeof(ILog), typeof(LoggerGroup))]
    [AddSingletonInject(typeof(DmtpRpcFeature))]
    [AddSingletonInject(typeof(RpcStore))]
    [AddSingletonInject(typeof(IRpcServerFactory), typeof(RpcServerFactory))]
    [GeneratorContainer]
    public partial class MyContainer : ManualContainer
    {
        public override bool IsRegistered(Type fromType, string key = "")
        {
            if (fromType==typeof(IDmtpRouteService))
            {
                return false;
            }
            return base.IsRegistered(fromType, key);
        }
    }
    #endregion
}