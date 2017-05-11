import receiverHOC from '../components/receiverHOC'

// Create receiver is only for testing purposes
// see the example folder to understand why it does exist
// Official function is receiver() you should not use createReceiver()
export function createReceiver(config) {
  const domain = config.domain

  // TODO: allow a property name to map into props the result?
  return function receiver(useCase) {
    //const domainUseCase = domain.get(useCase)

    return receiverHOC({
      useCaseName: useCase
    })
  }
}

// Official connector for receiver
export default createReceiver()