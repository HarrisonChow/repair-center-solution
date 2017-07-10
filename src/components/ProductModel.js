import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductModel = ({ ticket, setModel }) => (
  <div>
    <form>
      {modelsForCategory(ticket.category).map((model, index) => (
        <Link to='/issue-description'
          className={`btn btn-secondary d-block  ${model === ticket.model ? 'active' : ''}`}
          key={index} onClick={() => setModel(model)}>{model}
        </Link>
      ))}
    </form>
  </div>
)

const models = {
  IPhone: ['IPhone6', 'IPhone6s', 'IPhone7', 'IPhone6 Plus', 'IPhone6s Plus', 'IPhone7 Plus'],
  Macbook: ['Macbook Pro', 'Macbook Air'],
  IPad: ['IPad Pro', 'IPad', 'IPad mini'],
}

const modelsForCategory = (category) => {
  return models[category] || models.IPhone
}

ProductModel.propTypes = {
  ticket: PropTypes.object,
  setModel: PropTypes.func
}

export default ProductModel
