import { Component } from 'react'
import { Provider } from '../index'
import { createSender } from '../connectors/sender'

const sender = createSender({
  domain: {
    get: (useCase) => {
      execute: (params) => params.term
    }
  }
})

class DispatchComponent extends Component {
  constructor(props, context) {
    this.hi_use_case = props.hi_use_case
  }

  componentWillMount() {
    this.hi_use_case({ term: 'hi!'})
  }

  render() {
    return null
  }
}
const SenderComponent = sender('hi_use_case')(DispatchComponent)

const HiComponent = (props) => <div>props.hi_use_case</div>
const ReceiverComponent = receiver('hi_use_case')(HiComponent)

ReactDOM.render(
  <Provider store={store}>
    <SenderComponent />
    <ReceiverComponent />
  </Provider>
)

