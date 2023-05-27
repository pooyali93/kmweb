import './Intro.scss'
import Typewriter from "typewriter-effect";

export default function Intro() {



  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/MyPic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="container">
          <h2>Hi There, I'm</h2>
          <h1>Pooya Alipoor</h1>
          <h3>Freelance
            <span><Typewriter
              options={{
                strings: ["Developer", "Designer", "Content Creator"],
                autoStart: true,
                deleteSpeed: 120,
                delay: 150,
                pauseFor:1500,
                loop: true
                
              }}/>
            </span>.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>

    </div>
  )
}
