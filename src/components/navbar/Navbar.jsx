import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <span className='logo'>bookin</span>
            <div className="items">
                <button className="button">Register</button>
                <button className="button">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar