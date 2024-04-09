import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="../../../public/assets/hotel.jpg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>201 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="../../../public/assets/apartment.jpeg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>1123 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="../../../public/assets/resort.jpg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>63 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="../../../public/assets/villa.jpg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="../../../public/assets/cabin.jpg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList