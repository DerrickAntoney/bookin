import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="../../../public/assets/dublin.jpg" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className='siFeatures'></span>
        </div>
        <div className="siDetails"></div>
    </div>
  )
}

export default SearchItem