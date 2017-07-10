import React from 'react'
import { Link } from 'react-router-dom'

export const HomeView = () => (
  <div>
    <Link to='/product-category' className='btn btn-secondary d-block'>New ticket</Link>
    <Link to='/ticket-summary' className='btn btn-secondary d-block'>View my ticket</Link>
  </div>
)

export default HomeView
