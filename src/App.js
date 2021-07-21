// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
// import FriendStatus from './page/Hook/FriendStatus.js'
// import useFriendStatus from './page/Hook/useFriendStatus.js'
// import FriendListItem from './page/Hook/FriendListItem.js'
// import Login from './page/login/login';
// import Index from './page/index';
// import { Router } from 'react-router';
import Routes from './routes/routes';
// import Login from './page/login/login';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       friends:[
//         {id:1,name:"张三"},
//         {id:2,name:"李四"},
//         {id:3,name:"王五"}
//       ]
//     }
//     this.myRef = React.createRef()
//   }
//   componentDidMount(){
//     console.log(this.props)
//   }
//   render(){
//     return (
//       <div ref={this.myRef}>
//         {
//           this.state.friends.map((friend,index)=>{
//             return (
//               <div key={index}>
//                 <h1>id:{friend.id}</h1>
//                 <FriendListItem  friendObj={friend}  />              
//               </div>
//             )
//           }
//           )}
//       </div>
//     )
//   }
// }
class App extends Component {
  render() { 
    return ( 
      <Routes></Routes>
      // <Index></Index>
     );
  }
}
 
export default App;


