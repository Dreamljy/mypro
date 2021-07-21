
import useFriendStatus from './useFriendStatus'

export default function FriendStatus ({friendObj}){
    const isOnline = useFriendStatus(friendObj.id)
    
    if(isOnline===null){
        return 'loadding...'
    }
    return isOnline? "在线中~~~":"离线了..."
}