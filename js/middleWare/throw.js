export default function throwLog({dispatch,getState})
{
    return function (next)
    {
        return function (action)
        {

            let returnValue=next(action);

            return returnValue;
        }
    }
}