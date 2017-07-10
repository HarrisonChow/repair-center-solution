import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class issueDescription extends Component {
  handleChange = (event) => {
    const { setDescription } = this.props
    setDescription(event.target.value)
  }

  render () {
    const { ticket } = this.props
    return (
      <form>
        <textarea name='description'
          placeholder='describe your issue'
          rows='3' cols='50'
          defaultValue={ticket.description}
          className='form-control d-block'
          onChange={this.handleChange} />
        <Link to='/ticket-summary' className='btn btn-primary'>Submit</Link>
      </form>
    )
  }
}

issueDescription.propTypes = {
  ticket: PropTypes.object,
  setDescription: PropTypes.func
}

export default issueDescription
