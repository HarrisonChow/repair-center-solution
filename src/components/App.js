import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store, history, routes } = this.props
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <ConnectedRouter history={history} >
            {routes}
          </ConnectedRouter>
        </div>
      </Provider>
    )
  }
}

export default App
