import React from 'react'
import './login.css'
import {Redirect} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import { connect } from 'react-redux';

const history = createBrowserHistory()
//登录页面
export default  connect((user)=>(user),
    // {
    //     loginClick:()=>({
    //         type:'loginSuccess'
    //     })
    // }
    )
(
    class Login extends React.Component{
        constructor(props,context) {//构造函数
            super(props);
            this.state={
                myuser:{
                    loginId: '',
                    password: '',
                    date:new Date().toLocaleTimeString(),
                },
            }
            this.setLoginId=this.setLoginId.bind(this)
            this.setPassword=this.setPassword.bind(this)
            this.loginClick=this.loginClick.bind(this)
        }
        setLoginId(e){//修改id
            // console.log(e)
            this.setState(          
                {
                    myuser:{
                        loginId:e.target.value,
                        password:this.state.myuser.password,
                        date:new Date().toLocaleTimeString(),
                    }
                }     
            )
        };
        setPassword(e){//修改登录密码
            // console.log(e)
            this.setState(
                {
                    myuser:{
                        loginId:this.state.myuser.loginId,
                        password:e.target.value,
                        date:new Date().toLocaleTimeString(),
                    }
                }
            )  
        };
        loginClick(e){//登录
            e.preventDefault()
            if (this.state.myuser.loginId===""||this.state.myuser.password===""){
                alert("请输入账号或者密码")
            }
            else if (this.state.myuser.loginId === "111" && this.state.myuser.password === "111") {
                alert("登录成功")
    
                // console.log(history)
                // window.oppen('www.baidu.com')
                // history.push("/index")
                // console.log(this.state)
                this.props.dispatch({
                    type:'loginSuccess'
                }) 
            }
            else{
                alert("登录失败")
    
            }
        };
    
        componentDidMount(){//该组件第一次被渲染的时候运行
            this.getLockDate=setInterval(()=>{
                this.setState({
                    myuser:{
                        loginId:this.state.myuser.loginId,
                        password:this.state.myuser.password,
                        date:new Date().toLocaleTimeString(),
                    }
                })
            },1000)
            // console.log(this.state) 
        };
        componentWillUnmount(){//组件卸载的时候使用
            clearInterval(this.getLockDate)
        };
    
        render(){//登录
            // console.log(this.props)
            const {user,location} = this.props;
            const { isLogin } = user;
            if(isLogin){
                const rediect = (location.state && location.state.redirect) || "/" ;     
                // console.log(location.state.redirect)          
                return (
                    <Redirect to={rediect}></Redirect>
                )
            }
            return (
                <div className="loginBody">
                    <Name name="用户"></Name>
    
                        <ul>
                            <li>
                                <input type="text" placeholder="请输入密码" 
                                onChange={this.setLoginId}
                                />
                            </li>
                            <li>
                                <input type="password" placeholder="请输入密码" 
                                onChange={this.setPassword}
                                />
                            </li>
                            <li>
                                <button onClick={this.loginClick}>登录</button>
                            </li>
                            <li>
                                <span>去注册</span>
                            </li>
                            <li>当前时间：{this.state.myuser.date}</li>
                        </ul>
                    
                </div>
            )
        }
    
    
    }
 )



function Name(props) {
    return (
        <div className="title">Hello {props.name}</div>
    )
}