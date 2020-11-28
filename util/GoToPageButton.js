class GoToPageButton {
  static subscriberFunction = null

  constructor(pageName, label='') {
    this.button = document.createElement('button')
    console.log('creating button', pageName)
    // debugger
    // this.button.onclick = function() {
    //   console.log('calling subscriber')
    //   GoToPageButton.subscriberFunction(pageName)
    // }
    this.button.onclick = () => {
      console.log('CALLED ', pageName)
      GoToPageButton.subscriberFunction(pageName)
    }

    this.button.innerText = label
  }
  
  static subscribe(thatSubscriberFunction) {
    GoToPageButton.subscriberFunction = thatSubscriberFunction
  }
}

export default GoToPageButton
