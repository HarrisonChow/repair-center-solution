import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const issueDescription = ({ ticket, setDescription }) => (
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

issueDescription.propTypes = {
  ticket: PropTypes.object,
  setDescription: PropTypes.func
}

export default issueDescription
