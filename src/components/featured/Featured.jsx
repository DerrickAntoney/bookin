import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="../../../public/assets/dublin.jpg" alt="" className='featuredImg' />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="../../../public/assets/austin.jpg" alt="" className='featuredImg' />
            <div className="featuredTitle">
                <h1>Austin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="../../../public/assets/reno.jpeg" alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Reno</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured