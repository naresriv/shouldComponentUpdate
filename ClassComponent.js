import { Button } from 'antd';
import React, { Component } from 'react'

// upadtating state in react class components without re rendering of components
export default class ClassA extends Component {
    state={
        count:0
    }

addCount=()=>{
    this.setState((pre) => ({count:pre.count + 1}))
}
  
shouldComponentUpdate(props, nextState){
    if(nextState.count !== this.state.count){
        this.state = nextState;
        return false;
    }
    return true;
}

  render() {

    return (
      <div>
              <p> {this.state.count}</p>
              <Button onClick={this.addCount}>increse</Button>
      </div>
    )
  }
}
