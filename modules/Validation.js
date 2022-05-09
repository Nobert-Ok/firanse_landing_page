class ValidatorMessages {
  constructor() {
    this.messages = []
  }
  getMessages(errorObject) {
    const errors = errorObject.errors
    this.messages = []
    for (const index in errors) {
      if (Array.isArray(errors[index])) {
        errors[index].forEach((element) => {
          this.messages.push(element)
        })
      }
    }
    return this.messages
  }
}

const ValidatorObject = new ValidatorMessages()

export { ValidatorObject }
