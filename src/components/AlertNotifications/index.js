import {Component} from 'react'
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

const notifications = [
  {
    logo: <AiFillCheckCircle />,
    text: 'Success',
    content: 'You can access all the files in the folder',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <RiErrorWarningFill />,
    text: 'Error',
    content: 'Sorry, you are not authorized to have access to delete the file',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <MdWarning />,
    text: 'Warning',
    content: 'Viewers of this file can see comments and suggestions',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <MdInfo />,
    text: 'Info',
    content: 'Anyone on the internet can view these files',
    crossIcon: <GrFormClose />,
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alertNotificationContainer">
        <h1>Alert Notifications</h1>
        {notifications.map(each => (
          <Notification>{each}</Notification>
        ))}
      </div>
    )
  }
}

export default AlertNotifications
