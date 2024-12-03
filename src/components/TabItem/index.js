// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'button1 active' : 'button1'

  return (
    <li className="tab-items">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
