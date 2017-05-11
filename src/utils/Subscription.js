
// Check https://github.com/reactjs/react-redux/blob/master/src/utils/Subscription.js
// on how to implement this correctly, this is just a prototype of that

export default class Subscription {
  constructor(store, parentSub, onStateChange) {
    this.store = store
    this.parentSub = parentSub
    this.onStateChange = onStateChange
    this.unsubscribe = null
  }

  // This basically subscribes you to the store or if in props mode it delegates
  // see https://github.com/reactjs/react-redux/blob/master/src/components/connectAdvanced.js#L199
  trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub
        ? this.parentSub.addNestedSub(this.onStateChange)
        : this.store.subscribe(this.onStateChange)
    }
  }

  tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = null
    }
  }
}