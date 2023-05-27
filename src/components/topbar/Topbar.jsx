import './Topbar.scss'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className= {'topbar ' + (menuOpen && 'active')} >
      <div className="container">
        <div className="left">
          <a href="#intro" className='logo'>km<span>web.</span></a>
        </div>

        <div className="right">
          <div className="halalburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
