import React, {Component} from 'react';

export default class CustomerSearch extends Component{
  constructor(props) {
      super(props)

    this.state={term: ''}
    this.onInputChange= this.onInputChange.bind(this)
  }
  onInputChange(event){
     this.setState({term: event.target.value})

  }
  onFormSubmit(event){
    event.preventDefault()
  }
  render(){
    return(
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input
              placeholder="find customer"
              value={this.state.term}
              className="form-control"
              onChange={this.onInputChange}
             />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-danger">submit</button>
            </span>
          </div>

        </form>

    )
  }
}
