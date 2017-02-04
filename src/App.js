import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Counter from './Counter';
import FilteredList from './FilteredList';
/*
class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Counter} />
                <Route path='/search' component={FilteredList} />
            </Router>
        )
    }
}


export default App
*/


class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Counter} />
                    <Route path='search' component={FilteredList} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/search'>Search</Link>
    </div>
)

const Container = (props) => <div>
    <Nav />
    {props.children}
</div>

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App