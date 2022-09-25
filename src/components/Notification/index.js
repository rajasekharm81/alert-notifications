import {Component} from 'react'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    console.log(children)
    return (
      <div className="notificationContainer">
        <div className="logoContainer">
          <h1 className={children.text}>{children.logo}</h1>
        </div>
        <div className="contentContainer">
          <h1 className={children.text}>{children.text}</h1>
          <p className="notificationPara">{children.content}</p>
        </div>
        <div>
          <h1>{children.crossIcon}</h1>
        </div>
      </div>
    )
  }
}

export default Notification
