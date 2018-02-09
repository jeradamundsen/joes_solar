import React, {Component} from 'react';

class CustomerItem extends Component{
  constructor(props) {
      super(props)

      this.state = {
        name: '',
        address: '',
        kilowatts: '',
        date: ''
    }
  }
  render(){
    this.onEventChange= (event) =>{ this.setState({name: event.target.value})}
    return(
      <div className="">
        <input onChange={this.onEventChange}/>
      </div>
    )
  }
}
