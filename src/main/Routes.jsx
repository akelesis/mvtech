import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/Home'
import ContactUs from '../components/ContactUs'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/mail' component={ContactUs} />
        <Redirect from='*' to='/' />
    </Switch>