import {Component} from 'react'
import './index.css'

class Show extends Component {
  state: {isFirst: false, isSecond: false}

  firstButton = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  secondButton = () => {
    this.setState(prevState => ({isSecond: !prevState.isSecond}))
  }

  render() {
    const {isFirst, isSecond} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1>Show/Hide</h1>
          <div className="bottom-container">
            <div className="name-container">
              <button
                type="button"
                className="button-style"
                onClick={this.firstButton}
              >
                Show/Hide First Name
              </button>
              {isFirst && <p className="name-style">Joe</p>}
            </div>
            <div className="name-container">
              <button
                type="button"
                className="button-style"
                onClick={this.secondButton}
              >
                Show/Hide Second Name
              </button>
              {isSecond && <p className="name-style">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Show
