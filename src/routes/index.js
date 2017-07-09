// We only need to import the modules necessary for initial render
import CoreLayout from '../components/PageLayout'
import React from 'react'
import { Route } from 'react-router'
import Home from '../components/Home'

export default (
  <CoreLayout>
    <Route exact path='/' component={Home} />
  </CoreLayout>
)
