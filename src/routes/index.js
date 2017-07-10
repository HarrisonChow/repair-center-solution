// We only need to import the modules necessary for initial render
import CoreLayout from '../components/PageLayout'
import React from 'react'
import { Route } from 'react-router'
import Home from '../components/Home'
import ProductCategoryContainer from '../containers/ProductCategoryContainer'
import ProductModelContainer from '../containers/ProductModelContainer'
import IssueDescriptionContainer from '../containers/IssueDescriptionContainer'
import TicketSummaryContainer from '../containers/TicketSummaryContainer'

export default (
  <CoreLayout>
    <Route exact path='/' component={Home} />
    <Route path='/product-category' component={ProductCategoryContainer} />
    <Route path='/product-model' component={ProductModelContainer} />
    <Route path='/issue-description' component={IssueDescriptionContainer} />
    <Route path='/ticket-summary' component={TicketSummaryContainer} />
  </CoreLayout>
)
