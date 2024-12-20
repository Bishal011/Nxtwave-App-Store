// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-items">
      <img src={imageUrl} className="img1" alt={appName} />
      <p className="para1">{appName}</p>
    </li>
  )
}

export default AppItem
