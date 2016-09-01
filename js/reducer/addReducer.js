//设置state改变条件
export function addReducer (state={number:0},action)
{
    switch(action.type)
    {
        case "ADD":
            return Object.assign({},state,{number:state.number+1});
        case "REDUCE":
            return Object.assign({},state,{number:state.number-1});
        default:
            return state;
    }
}