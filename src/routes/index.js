// We only need to import the modules necessary for initial render
import CoreLayout from '../components/PageLayout'
import React from 'react'
import { Route } from 'react-router'
import Home from '../components/Home'
import Category from '../components/Category'
import ProductModel from '../components/ProductModel'
import IssueDescription from '../components/IssueDescription'
import TicketSummary from '../components/TicketSummary'

export default (
  <CoreLayout>
    <Route exact path='/' component={Home} />
    <Route path='/product-category' component={Category} />
    <Route path='/product-model' component={ProductModel} />
    <Route path='/issue-description' component={IssueDescription} />
    <Route path='/ticket-summary' component={TicketSummary} />
  </CoreLayout>
)
