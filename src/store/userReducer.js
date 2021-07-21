const initState={
    isLogin:false,
    userInfo:{},
}

export default function userReducer(state={...initState},action) {
    switch(action.type){
        case "loginSuccess":           
            return {
                isLogin:true,//登录成功
                userInfo:{
                    name:"ljy",
                    id:111,
                    password:111,
                },
                // userInfo:action.userInfo//赋值账号信息
            }
        default:
            return{
                ...state
            }

    }
}
