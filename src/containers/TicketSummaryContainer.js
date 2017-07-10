import { connect } from 'react-redux'
import TicketSummary from '../components/TicketSummary'

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default connect(mapStateToProps, null)(TicketSummary)
