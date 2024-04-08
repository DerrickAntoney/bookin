import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format} from 'date-fns';

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className='header'>
        <div className="container">
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
                    <span className='headerSearchText'>2 adults 2 children 1 room</span>
                </div>
                <div className="headerSearchItem">
                    <button className="btn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header