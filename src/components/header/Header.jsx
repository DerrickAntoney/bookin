import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format} from 'date-fns';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        { adults: 1,
        children: 0,
        room: 1 })
    const handleOption = (name, operation) => {
        setOptions(prev=>{return {
            ...prev, [name] : operation === "i" ? options[name] +1 : options[name] -1,
        }})
    }
  return (
    <div className='header'>
        <div className={type === "list" ? "container listMode" : "container"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" && <>
                <h1 className="title">
                    A lifetime of discounts? It is genius.
                </h1>
                <p className="desc">
                    Get rewarded for your travels - unlock instant
                    saving of 10% or more with a free bookin account
                </p>
                <button className="btn">
                    Sign in / Register
                </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input 
                            type="text"
                            placeholder='Where are you going?'
                            className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem" onClick={() => setOpenDate(!openDate)}>
                        <FontAwesomeIcon icon={faCalendarDay} className='headerIcon'/>
                        <span 
                            className='headerSearchText'>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adults} adult(s). ${options.children} children . ${options.room} room(s)`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">
                                        Adult
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.adults <= 1} className="optionCounterButton" onClick={()=> handleOption("adults", "d")}>-</button>
                                        <span className="optionCounterNumber">
                                            {options.adults}
                                        </span>
                                        <button className="optionCounterButton" onClick={()=> handleOption("adults", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">
                                        Children
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 1} className="optionCounterButton"onClick={()=> handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">
                                            {options.children}
                                        </span>
                                        <button className="optionCounterButton"onClick={()=> handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">
                                        Room
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=> handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber">
                                            {options.room}
                                        </span>
                                        <button className="optionCounterButton" onClick={()=> handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="btn">Search</button>
                    </div>
                </div>
            </> }
        </div>
    </div>
  )
}

export default Header