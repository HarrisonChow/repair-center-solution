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
      <div>
        <form>
          <div className='d-block'>
            <textarea name='description'
              placeholder='describe your issue'
              rows='3' cols='50'
              defaultValue={ticket.description}
              className='form-control'
              onChange={this.handleChange} />
          </div>
          <Link to='/ticket-summary' className='btn btn-primary'>Submit</Link>
        </form>
      </div>
    )
  }
}

issueDescription.propTypes = {
  ticket: PropTypes.object,
  setDescription: PropTypes.func
}

export default issueDescription
