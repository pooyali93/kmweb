import './Testimonials.scss'

export default function Testimonials() {
  const review = [
    {
      id: "1",
      name: "Kaywan Kaderi",
      jobTitle:"Taxi Driver",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/MyPic.png"
    },
  
    {
      id: "2",
      name: "Majid Minapour",
      jobTitle:"Coffee Owner",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, expedita nesciunt!",
      img: "assets/r1.jpg",
      featured: true
    },
  
    {
      id: "3",
      name: "Abdul Aziz",
      jobTitle:"360 Fitness",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci natus consequatur nulla",
      img: "assets/r2.jpg"
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {review.map(item=> (
          <div className={ item.featured ? "card featured" : "card"}>
          <div className="top">
            <img src={item.img} className='user' alt="" />
          </div>
          <div className="middle">
            {item.desc}
          </div>

          <div className="bottom">
            <h3>{item.name}</h3>
            <h4>{item.jobTitle}</h4>
          </div>
        </div>
      ))}
      </div>
      </div>
  )
}
