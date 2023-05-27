import './Portfolio.scss'
// import PortfolioList from '../portfolioList/PortfolioList'
// import { useState } from 'react'

export default function Portfolio() {

  //const [selected, setSelected] = useState("featured")
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured"
  //   },
  //   {
  //     id: "Web",
  //     title: "Web Design"
  //   },
  //   {
  //     id: "mobile",
  //     title: "App Development"
  //   },
  //   {
  //     id: "brands",
  //     title: "Branding"
  //   },
  // ]

  return (
    <div className='portfolio' id='portfolio'>
      {/* <h1>Portfolio</h1> */}
      {/* <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id = {item.id}
          />
        ))}

      </ul> */}

      <div className="container">
        <div className="item">
          <img src="assets/p1.png" alt="" />
          <h3>Web Dev - K1 Taxi Service</h3>
        </div>

        <div className="item">
          <img src="assets/p2.png" alt="" />
          <h3>Web - Fitness </h3>
        </div>

        <div className="item">
          <img src="assets/p3.png" alt="" />
          <h3>Web - Film Website</h3>
        </div>

        <div className="item">
          <img src="assets/p4.png" alt="" />
          <h3>App - Recipe App</h3>
        </div>

        <div className="item">
          <img src="assets/p5.png" alt="" />
          <h3>App - Bowling Scorecard</h3>
        </div>

        <div className="item">
          <img src="assets/p6.png" alt="" />
          <h3>Logo - Dreamcakes Luton</h3>
        </div>
        {/* <div className="item">
          <img className='image' src="assets/p1.png" alt="" />
          <div className="middle">
            <div className='text'>Web Dev/ K1 Taxi Service</div>
          </div>
        </div>

        <div className="item">
          <img className='image' src="assets/p2.png" alt="" />
          <div className="middle">
            <div className='text'>App Dev / Recipe App</div>
          </div>
        </div>

        <div className="item">
          <img className='image' src="assets/p3.png" alt="" />
          <div className="middle">
            <div className='text'>Logo / Canopy Cover</div>
          </div>
        </div>

        <div className="item">
          <img className='image' src="assets/p4.png" alt="" />
          <div className="middle">
            <div className='text'>Web Dev / Charity Org</div>
          </div>
        </div>

        <div className="item">
          <img className='image' src="assets/p5.png" alt="" />
          <div className="middle">
            <div className='text'>Web Dev / Cabra Sport</div>
          </div>
        </div>

        <div className="item">
          <img className='image' src="assets/p6.png" alt="" />
          <div className="middle">
            <div className='text'>Flyer / Barber Shop</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
