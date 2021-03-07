import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Media from './pages/Media'
import Connect from './pages/Connect'
import Thoughts from './pages/Thoughts'
import ViewPost from './pages/ViewPost'




class App extends Component{
    render(){
      return(
        <Router>
          <Switch>
            <div className = "container-fluid">
                <Route exact path="/" component={Home}/>
                <Route exact path="/Bio" component={Bio}/>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/Thoughts" component={Thoughts}/>
                <Route path="/Thoughts/:postId" component={ViewPost}/>
                <Route exact path="/Connect" component={Connect}/>
                {/* <Footer/> */}
            </div>
            </Switch>
        </Router>
      )
    }
  }


export default App