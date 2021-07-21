
import {useState,useEffect} from 'react'
// import PropTypes from 'prop-types';

export default function useFriendStatus (id){
    const [isOnline,setIsOnline] = useState(null)
    function changOnline (state){
        setIsOnline(state)
    }
    
    useEffect(()=>{
        //随机产生三种状态
       let statue =[null,true,false][parseInt(Math.random()*3)];
       changOnline(statue);
       return () =>{

       }
    },[id])//仅在id更改时进行更新
    return isOnline
}

// useFriendStatus.prototype={
//     isOnline:PropTypes.bool
// }