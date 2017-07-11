import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDescription } from '../actionsAndReducers/ticket'

const IssueDescription = ({ ticket, setDescription }) => (
  <form>
    <textarea name='description'
      placeholder='describe your issue'
      rows='3' cols='50'
      defaultValue={ticket.description}
      className='form-control d-block'
      onBlur={(event) => setDescription(event.target.value)} />
    <Link to='/ticket-summary' className='btn btn-primary'>Submit</Link>
  </form>
)

IssueDescription.propTypes = {
  ticket: PropTypes.object,
  setDescription: PropTypes.func
}

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

const mapDispatchToProps = {
  setDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueDescription)
