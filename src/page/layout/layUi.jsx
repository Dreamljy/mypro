import React from 'react';

import BottonNav from "../../components/bottonNav/bottonNav";

// 页面框架
class LayUi extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        const {children} = this.props
        // console.log(children)
        return(
            <div>
                {children}
                <BottonNav/>
            </div>
            
        )
    }
}

export default LayUi

