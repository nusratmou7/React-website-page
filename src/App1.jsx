import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{Route,Switch,Redirect} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Menu from './Menu'
import Footer from './Footer'

const App1=()=>{

return ( 

<>
<Menu/>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/service" component={Service}/>
<Route exact path="/Contact" component={Contact}/>
<Redirect to="/" />
</Switch>
<Footer/>
</>
 
) 
}


 export default App1

