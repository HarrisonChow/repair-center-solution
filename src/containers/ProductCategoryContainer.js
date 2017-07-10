import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import ProductCategory from '../components/ProductCategory'
import { setCategory } from '../actionsAndReducers/ticket'

const mapDispatchToProps = {
  setCategory
}

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCategory))
