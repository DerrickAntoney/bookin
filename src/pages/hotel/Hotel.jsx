import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Hotel = () => {
  const [sliderNumber, setSliderNumber] = setState(0)
  const [open, setOpen] = setState(false)
  const photos = [
    {
      src: '../../../public/assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../public/assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../public/assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../public/assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../public/assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../public/assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
  ]
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location -- 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} onClick={()=>setSliderNumber(i)} alt={photo.alt} key={i} className='hotelImg'/>
              </div> 
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              Hotel-Paradise-Villas in New york provides accommodations with an outdoor swimming pool, a garden, and a bar. This property offers access to a terrace and free private parking. The villa offers garden views, an outdoor fireplace, and a 24-hour front desk.
              The units at the villa complex feature private entrance and soundproofing so guests can enjoy a peaceful stay. The rooms have a kettle, a flat-screen TV, a safety deposit box, and free Wifi, while some rooms also offer a patio and some have pool views. At the villa complex, the units have bed linen and towels.
              À la carte and American breakfast options with fruit and juice are available every morning at the villa. During warmer months, you can make use of the barbecue facilities and eat on the private balcony.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel