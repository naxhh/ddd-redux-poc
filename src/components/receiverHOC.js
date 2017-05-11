import Subscription from '../utils/Subscription'

// This is the factory that will wrapper the given component around the receiver HOC
export default function receiverHOC(config) {
  // Used to check data from the store
  const useCaseName = config.useCaseName

  return function wrapWithReceiver(WrappedComponent) {

    class Receiver extends Component {
      constructor(props, context) {
        super(props, context)

        this.store = context.store

        this.subscription = new Subscription(this.store, this.props, () => this.onStateChange())
      }

      // TODO: Check if props require to perform an update and update
      onStateChange() {
        // Check store state
        const currentState = this.store.state()
        // see if result from the use case has changed
        const hasChanged= someMagicalFunctionComparission(currentProps, nextProps)
        this.shouldUpdate = true
        
        // perform a state update
        if (hasChanged) {
          this.setState({props: nextProps})
        }
      }

      // Is important to do the sub here
      // check https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L148
      componentDidMount() {
        this.subscription.trySubscribe()
      }

      componentWillReceiveProps() {
        // make a check on props
        if (changed) this.shouldUpdate = true
      }

      // You only need to update if the store has changed or given props changed
      shouldComponentUpdate() {
        return this.shouldUpdate
      }

      componentWillUnmount() {
        this.subscription.tryUnsubscribe()
        this.subscription = null
      }

      render() {
        this.shouldUpdate = false
        // Send all the props
        <WrappedComponent props={...this.state.props} />
      }
    }

  }
}