/*
此代码由Rpc工具直接生成，非必要请不要修改此处代码
*/
#pragma warning disable
using System;
using TouchSocket.Core;
using TouchSocket.Sockets;
using TouchSocket.Rpc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;
namespace RpcProxy
{
public interface IMyRpcServer:TouchSocket.Rpc.IRemoteServer
{
///<summary>
///登录
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
System.Boolean Login(System.String account,System.String password,IInvokeOption invokeOption = default);
///<summary>
///登录
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
Task<System.Boolean> LoginAsync(System.String account,System.String password,IInvokeOption invokeOption = default);

///<summary>
///注册
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
System.Boolean Register(RegisterModel register,IInvokeOption invokeOption = default);
///<summary>
///注册
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
Task<System.Boolean> RegisterAsync(RegisterModel register,IInvokeOption invokeOption = default);

///<summary>
///性能测试
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
System.Int32 Performance(System.Int32 a,IInvokeOption invokeOption = default);
///<summary>
///性能测试
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
Task<System.Int32> PerformanceAsync(System.Int32 a,IInvokeOption invokeOption = default);

///<summary>
///测试out
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
System.Boolean OutBytes(out System.Byte[] bytes,IInvokeOption invokeOption = default);

}
public class MyRpcServer :IMyRpcServer
{
public MyRpcServer(IRpcClient client)
{
this.Client=client;
}
public IRpcClient Client{get;private set; }
///<summary>
///登录
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public System.Boolean Login(System.String account,System.String password,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{account,password};
System.Boolean returnData=(System.Boolean)Client.Invoke(typeof(System.Boolean),"Login",invokeOption, parameters);
return returnData;
}
///<summary>
///登录
///</summary>
public async Task<System.Boolean> LoginAsync(System.String account,System.String password,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{account,password};
return (System.Boolean) await Client.InvokeAsync(typeof(System.Boolean),"Login",invokeOption, parameters);
}

///<summary>
///注册
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public System.Boolean Register(RegisterModel register,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{register};
System.Boolean returnData=(System.Boolean)Client.Invoke(typeof(System.Boolean),"Register",invokeOption, parameters);
return returnData;
}
///<summary>
///注册
///</summary>
public async Task<System.Boolean> RegisterAsync(RegisterModel register,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{register};
return (System.Boolean) await Client.InvokeAsync(typeof(System.Boolean),"Register",invokeOption, parameters);
}

///<summary>
///性能测试
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public System.Int32 Performance(System.Int32 a,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{a};
System.Int32 returnData=(System.Int32)Client.Invoke(typeof(System.Int32),"Performance",invokeOption, parameters);
return returnData;
}
///<summary>
///性能测试
///</summary>
public async Task<System.Int32> PerformanceAsync(System.Int32 a,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{a};
return (System.Int32) await Client.InvokeAsync(typeof(System.Int32),"Performance",invokeOption, parameters);
}

///<summary>
///测试out
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public System.Boolean OutBytes(out System.Byte[] bytes,IInvokeOption invokeOption = default)
{
if(Client==null)
{
throw new RpcException("IRpcClient为空，请先初始化或者进行赋值");
}
object[] parameters = new object[]{default(System.Byte[])};
Type[] types = new Type[]{typeof(System.Byte[])};
System.Boolean returnData=(System.Boolean)Client.Invoke(typeof(System.Boolean),"OutBytes",invokeOption,ref parameters,types);
if(parameters!=null)
{
bytes=(System.Byte[])parameters[0];
}
else
{
bytes=default(System.Byte[]);
}
return returnData;
}

}
public static class MyRpcServerExtensions
{
///<summary>
///登录
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public static System.Boolean Login<TClient>(this TClient client,System.String account,System.String password,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{account,password};
System.Boolean returnData=(System.Boolean)client.Invoke(typeof(System.Boolean),"Login",invokeOption, parameters);
return returnData;
}
///<summary>
///登录
///</summary>
public static async Task<System.Boolean> LoginAsync<TClient>(this TClient client,System.String account,System.String password,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{account,password};
return (System.Boolean) await client.InvokeAsync(typeof(System.Boolean),"Login",invokeOption, parameters);
}

///<summary>
///注册
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public static System.Boolean Register<TClient>(this TClient client,RegisterModel register,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{register};
System.Boolean returnData=(System.Boolean)client.Invoke(typeof(System.Boolean),"Register",invokeOption, parameters);
return returnData;
}
///<summary>
///注册
///</summary>
public static async Task<System.Boolean> RegisterAsync<TClient>(this TClient client,RegisterModel register,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{register};
return (System.Boolean) await client.InvokeAsync(typeof(System.Boolean),"Register",invokeOption, parameters);
}

///<summary>
///性能测试
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public static System.Int32 Performance<TClient>(this TClient client,System.Int32 a,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{a};
System.Int32 returnData=(System.Int32)client.Invoke(typeof(System.Int32),"Performance",invokeOption, parameters);
return returnData;
}
///<summary>
///性能测试
///</summary>
public static async Task<System.Int32> PerformanceAsync<TClient>(this TClient client,System.Int32 a,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{a};
return (System.Int32) await client.InvokeAsync(typeof(System.Int32),"Performance",invokeOption, parameters);
}

///<summary>
///测试out
///</summary>
/// <exception cref="System.TimeoutException">调用超时</exception>
/// <exception cref="TouchSocket.Rpc.RpcInvokeException">Rpc调用异常</exception>
/// <exception cref="System.Exception">其他异常</exception>
public static System.Boolean OutBytes<TClient>(this TClient client,out System.Byte[] bytes,IInvokeOption invokeOption = default) where TClient:
TouchSocket.Rpc.IRpcClient{
object[] parameters = new object[]{default(System.Byte[])};
Type[] types = new Type[]{typeof(System.Byte[])};
System.Boolean returnData=(System.Boolean)client.Invoke(typeof(System.Boolean),"OutBytes",invokeOption,ref parameters,types);
if(parameters!=null)
{
bytes=(System.Byte[])parameters[0];
}
else
{
bytes=default(System.Byte[]);
}
return returnData;
}

}

public class RegisterModel
{
public System.String Account{get;set;}
public System.String Password{get;set;}
public System.Int32 Id{get;set;}
}

}
