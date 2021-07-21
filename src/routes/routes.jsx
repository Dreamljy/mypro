// import { Router, Route, hashHistory } from 'react-router';
import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import Home from '../page/home/home'
import LayUi from '../page/layout/layUi'
import Login from '../page/login/login'
import MyBlog from '../page/myblog/myBlog'
import MyInfo from '../page/myInfo/myInfo'
import Register from '../page/register/register'
import _404Page from '../page/_404/_404Page'
import PrivateRouter from './PrivateRouter'
function  Routes(props){
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/"/> */}
        <Route exact path="/" component={Home} />
        <Redirect to="/" from="/home"/>
        {/* <Route exact path="/index" component={LayUi}/> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home}/>
        <PrivateRouter exact path="/myInfo" component={MyInfo}/>
        <PrivateRouter exact path="/myblog" component={MyBlog}/>
        <Route exact component={_404Page}/>
        {/* <Route path="" component={}/> */}
        {/* <Redirect to="/home" from="/"/> */}
      </Switch>
    </Router>
  )
};

export default Routes;

