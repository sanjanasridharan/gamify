import React,{Component} from 'react'
import {CheckLogin} from '../context/CheckLogin'
import CreateUser from './CreateUser'
import StoreValue from './StoreValue'
import {NavBar} from './NavBar'
class Start extends Component
{
  static contextType=CheckLogin
  render(){
    console.log(this.context)
    const isLogin=this.context.isLogin
    const username=this.context.username
    const level=this.context.currentLevel
    var didLogin;
    var nav
    if(!isLogin)
    {
      didLogin=<CreateUser/>
      nav=""
    }
    else
    {  console.log(username)
      nav=<NavBar props/>
      didLogin=<StoreValue/>
    }
    
  return(
    <div>
    {nav}
     {didLogin}
     </div>
    )
}
}

export default Start