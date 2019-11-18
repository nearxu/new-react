import React from 'react'
import Counter from './count'
import {onIncrements,onDecrements,onIncrementAsyncs} from './action'
export default class App extends React.Component {
  render(){
    return (
      <Counter
      onIncrement={() => onIncrements()}
      onDecrement={() => onDecrements()}
      onIncrementAsync={()=> onIncrementAsyncs()}
      />
    )
  }
}