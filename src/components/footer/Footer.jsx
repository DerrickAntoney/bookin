import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
                <li className="fListItem">Places of interest</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Car rental</li>
                <li className="fListItem">Flight finder</li>
                <li className="fListItem">Restaurant reservations</li>
                <li className="fListItem">Bookin.com for travel agents</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments</li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">Resorts</li>
                <li className="fListItem">Hostels</li>
                <li className="fListItem">B&Bs</li>
                <li className="fListItem">Guests Houses</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Unique places to stay</li>
                <li className="fListItem">All destinations </li>
                <li className="fListItem">All flight destinations</li>
                <li className="fListItem">All car rental locations </li>
                <li className="fListItem">All vacation destinations </li>
                <li className="fListItem">Discover monthly stays</li>
                <li className="fListItem">Unpacked: Travel articles </li>
                <li className="fListItem">Seasonal and holiday deals </li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Customer Service Help </li>
                <li className="fListItem">Terms & Conditions </li>
                <li className="fListItem">Privacy & cookie statement </li>
                <li className="fListItem">Careers </li>
                <li className="fListItem">Safety Resource Center </li>
                <li className="fListItem">How We Work </li>
            </ul>
        </div>
        <div className="fText">Copyright &copy; {new Date().getFullYear()} bookin</div>
    </div>
  )
}

export default Footer