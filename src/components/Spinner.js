import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
