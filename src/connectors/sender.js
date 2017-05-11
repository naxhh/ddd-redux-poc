import senderHOC from '../components/senderHOC'

// Create sender is only for testing purposes
// see the example folder to understand why it does exist
// Official function is sender() you should not use createSender()
export function createSender(config) {
  const domain = config.domain

  // todo: allow giving the name of the resulting prop?
  return function sender(useCaseName) {
    const useCase = domain.get(useCaseName)

    return senderHOC({
      useCase,
      useCaseName
    })
  }
}

// Official connector for sender
export default createSender()