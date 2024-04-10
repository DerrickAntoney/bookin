import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from'react';


const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: '../../../assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../assets/hotelroom1.jpg',
      alt: 'hotel photo',
    },
    {
      src: '../../../assets/hotelroom2.jpg',
      alt: 'hotel photo',
    },
  ]

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === 'l') {
      newSliderNumber = sliderNumber === 0? photos.length - 1 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === photos.length - 1? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber);

  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'onClick={()=> handleMove('l')}/>
              <div className="sliderWrapper" key={sliderNumber}>
                <img src={photos[sliderNumber].src} alt={photos[sliderNumber].alt} className='sliderImg'/>
              </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove('r')}/>
          </div>}
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
                <img src={photo.src} onClick={()=>handleOpen(i)} alt={photo.alt} key={i} className='hotelImg'/>
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