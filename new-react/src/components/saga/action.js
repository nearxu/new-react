export const INCREMENT = 'INCREMENT'

export const DECREMENT = 'DECREMENT'

export const ASYNCINCREMENT = 'ASYNCINCREMENT'

export function onIncrements() {
  return {
    type:INCREMENT
  }
}

export function onDecrements() {
  return {
    type:DECREMENT
  }
}

export function onIncrementAsyncs() {
  return {
    type:ASYNCINCREMENT
  }
}