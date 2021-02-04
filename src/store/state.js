/*
   一个包含n个用于直接更新状态数据属性的对象模块
 */
export default {
    firstView: true, //是否显示第一个界面
    loading: false,  //是否正在请求加载中
    users: [],       //所有匹配的用户列表
    errorMsg: ''     //需要显示的错误信息
}