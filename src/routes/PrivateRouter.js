import React, { Component } from 'react';
import { Redirect, Route,NavLink } from 'react-router-dom';//路由

import {connect} from 'react-redux';//获取数据

export default connect(  ({user}) => ({user})  )  ( 
    class PrivateRouter extends Component{
        render(){
            /**
             * isLogin 是否登录
             * path  路径
             * component   组件
             * location  内容
             */
            const { user , path , component , location} = this.props;
            //console.log(location); 存放上一级路由的地方
            const { isLogin } = user;
            if(isLogin){
                return (
                    <Route path={path} component={component} activeClassName="activeClass" />
                )
            }
            return(
                <Redirect to={{
                    pathname:'/login',//路径
                    state:{redirect:location.pathname}//存放上一个页面的路由路径，登录成功则放回该界面
                }}>

                </Redirect>
            )
        }
})