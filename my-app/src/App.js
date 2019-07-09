import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch, Prompt } from 'react-router-dom'
import One from './views/one'
import Two from './views/two'
import Person from './views/person'
import NotFond from './views/404-notFond'
import Layout from './views/layout'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header>
          <Prompt when={true} message="你确定你真的要离开此页面？"></Prompt>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/two">第二页</Link></li>
            <li>
              <Route
                path='/'
                exact={true}
                children={(props) => (
                  <div>
                    <Link
                      to="/"
                      className={
                        props.match? 'active' : ''
                      }>首页</Link>
                  </div>
                ) }/>
            </li>
            <li>
            <Route 
                path='/two'
                exact={true}
                children={(props) => (
                  <div>
                    <Link
                      to="/two"
                      className={
                        props.match? 'active' : ''
                      }>第二页</Link>
                  </div>
                )}/>
            </li>
          </ul>
        </header> */}
        <Switch>
          <Route path='/' exact component={One}/>
          <Route path='/two' component={Two}/>
          <Route path='/layout' render={(props) => (
            <Layout history={props.history}>
              <Switch>
                <Route path='/layout' exact component={One}/>
                <Route path='/layout/two' component={Two}/>
              </Switch>
            </Layout>
          )}/>
          
          <Route path='/person/:id' component={Person}/>
          <Route path='/NotFound' component={NotFond}/>
          <Route render={() => (
            <Redirect to="/NotFound" />
          )}></Route>/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
