import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { storeShape } from '../utils/shapes.js'

export default class Provider extends Component {
  getChildContext() {
    return { store: this.store }
  }

  constructor(props, context) {
    super(props, context)

    this.store = props.store
  }

  render() {
    return Children.only(this.props.Children)
  }
}

Provider.displayName = 'Provider'

Provider.propTypes = {
  store: storeShape.isRequired
  children: PropTypes.element.isRequired
}

Provider.childContextTypes = {
  store: storeShape.isRequired,
}