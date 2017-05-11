// This is the factory that will wrapper the given component around the sender HOC
/*
  This component is much simpler, since it only cares of providing a new prop to the WrappedComponent
  this prop will be a handler that will execute the use case, and store the data into the store
*/

export default function senderHOC(config) {
  const useCase = config.useCase
  const useCaseName = config.useCaseName

  return function wrapWithSender(WrappedComponent) {

    class Sender extends Component {
      constructor(props, context) {
        super(props, context)
        this.store = context.store

        this.handler = (params) => {
          useCase.execute(params).then((result) => {
            store.dispatch({
              [useCaseName]: {
                params,
                result
              }
            })
          })
        }
      }

      render() {
        <WrappedComponent props={this.props + handler} />
      }
    }

  }
}