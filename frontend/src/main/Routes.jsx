import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/Home'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'
import Budget from '../components/Budget'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/mail' component={ContactUs} />
        <Route path='/services' component={Services}/>
        <Route path='/budget' component={Budget}/>
        <Redirect from='*' to='/' />
    </Switch>