/*
redex的applyMiddleware函数会给中间件第一层函数传递两个参数,分别为:
1.dispatch
2.getState

第二层函数接收一个参数:next,相当于dispatch

第三层函数接收一个参数:action,用于改变state

 */
export default function logger({dispatch,getState})
{
    return function (next)
    {
        return function (action)
        {
            console.info("执行中间件之前",action);

            let returnValue=next(action);

            console.info("执行中间件之后",getState());

            return returnValue;
        }
    }
}