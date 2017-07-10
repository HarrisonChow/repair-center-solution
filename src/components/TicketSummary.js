import React from 'react'
import PropTypes from 'prop-types'

export const TicketSummary = ({ ticket }) => {
  return (
    <div className='card' >
      <div className='card-block' >
        <h4 className='card-title' >Submitted ticket</h4>
        <div className='card-text'>
          <div className='row'>
            <div className='col-sm-4 text-right'>Category:</div>
            <div className='col-sm-8 text-left'>{ticket.category}</div>
          </div>
          <div className='row'>
            <div className='col-sm-4 text-right'>Model:</div>
            <div className='col-sm-8 text-left'>{ticket.model}</div>
          </div>
          <div className='row'>
            <div className='col-sm-4 text-right'>Description:</div>
            <div className='col-sm-8 text-left'>{ticket.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

TicketSummary.propTypes = {
  ticket: PropTypes.object
}

export default TicketSummary
