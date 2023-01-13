import { Fragment, useState } from "react"
import ArrowDown from '../assets/images/down.png'
import ArrowUp from '../assets/images/up.png'
import Check from '../assets/images/check.png'
import '../assets/dropdown.css'

const DropDown = () => {
    const [isShow, toggle] = useState(true)
    const [items, setitems] = useState<any[]>(['Education', 'Art', 'Sport'])
    const [selectedItem, setSelectedItem] = useState<string>()

    const setNewItem = (event: React.KeyboardEvent<HTMLInputElement> & {key: string}): any => {
        const { key } = event;
        let target = event.target as HTMLInputElement;
        let value = target.value;

        // Open option list as sson as enter new value
        toggle(true)

        // Checking Enter key to save new option key
        if (key === 'Enter') {
            if(target.value.trim()) {
                setitems((oldValue) => {
                    return [
                        ...oldValue,
                        !oldValue.includes(value) && value
                    ]
                })

                // Make selected boc empty after entring new option 
                target.value = ''
            }
        } 
    }

    /**
     * Set selected item by passing new item
     * @param item {string}
     */
    const setAsSelectedItem = (item: string) => {
        setSelectedItem(item)
    }

    return (
        <Fragment>
            <h5>
                You are able to set new option at first by entering new option and pressing Enter key
            </h5>
            <div className="dropdown-wrapper">
                <input onKeyDown={setNewItem} value={selectedItem} className="dropdown-input" placeholder="Enter new option then press enter key" />
                <div className="arrow-icon-wrapper">
                    <img src={isShow? ArrowDown: ArrowUp} onClick={() => toggle(!isShow)} className="arrow-icon-img" />
                </div>
            </div>
            {
             isShow && <div className="option-wrapper">
                {items.map((item) => (
                    <p onClick={() => setAsSelectedItem(item)} key={item} className={`option-item ${selectedItem === item ? 'selected-option': ''}`}>
                        {item}
                        {item === selectedItem &&(<img src={Check} alt="check" className="check-icon" />)}
                    </p> 
                ))
                }
            </div>
            }
        </Fragment>
    )
}

export default DropDown