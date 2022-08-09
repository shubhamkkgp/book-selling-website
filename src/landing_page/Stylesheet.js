import React, { Component } from 'react'
import './myStyles.css'

class Stylesheet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: ''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <form>
        <div>
        <input type="search" value={this.state.username} onChange={this.handleUsernameChange} placeholder='Search' className='search'/>
        </div>
      </form>
    )
  }
}

export default Stylesheet