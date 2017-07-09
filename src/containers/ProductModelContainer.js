import { connect } from 'react-redux'
import ProductModel from '../components/ProductModel'
import { setModel } from '../actionsAndReducers/ticket'

const mapStateToProps = (state) => ({
  ticket: state.ticket,
})

const mapDispatchToProps = {
  setModel
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModel)
