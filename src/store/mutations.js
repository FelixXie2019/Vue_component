/*
   一个包含n个用于直接更新状态数据的方法的对象
   mutation方法不要包含异步操作和逻辑处理代码
 */
export default {
    //  请求中
    requesting(state){
        state.firstView=false
        state.loading=true
    },
    //请求成功
    req_success(state,{users}){
        state.loading=false
        state.users=users
    },
    //请求失败
    req_error(state,{errMSg}){
        state.loading=false
        state.errorMsg=errMSg
    }
}