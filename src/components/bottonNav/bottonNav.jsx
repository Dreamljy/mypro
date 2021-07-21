
import { Component } from 'react';
import "./bottonNav.css"

import {Link,NavLink} from 'react-router-dom'

const bottonIten=[
    {url:"/home",title:"大众博客",icon:"cangchu",isActive:false},
    {url:"/myblog",title:"我的博客",icon:"yonghuguanli",isActive:true},
    {url:"/myInfo",title:"我的信息",icon:"xitong",isActive:true},
]

class BottonNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        // console.log(bottonIten.length)
    }
    render() {
        return (
            <ul className="bottonNav_ul">
                {
                    bottonIten.map((item,index)=>{
                        return(
                            <ItenNav key={index} {...item}>                           
                           </ItenNav>
                        )                        
                    })
                }
            </ul>
        );
    }
}

function ItenNav (props){

    return(
        <li className="itenNav">
            <span className={"icon icon-"+props.icon}></span>           
            {/* {
                if(!props.isActive){
                    return (
                        <NavLink to={props.url} activeClassName="activeClass">{props.title}</NavLink>
                    )
                }
            } */}
            <NavLink to={props.url} activeClassName="activeClass">{props.title}</NavLink>
        </li>
    )
}
export default BottonNav;