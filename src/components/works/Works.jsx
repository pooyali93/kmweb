import { useState } from 'react';
import './Works.scss'

import listOfProjects from "../data";

export default function Works() {
  const [project, setProject] = useState(listOfProjects);
  const [currentSlide, setCurrentSlide] = useState(0)


const handleClick = (arrow) =>  {
  arrow === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
  setCurrentSlide(currentSlide < project.length - 1 ? currentSlide+1 : 0)
}
  return ( 
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {project.map(item =>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>
                  {item.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="laptop" />
            </div>
          </div>
        </div>
          ))}
      </div>
      <img src="assets/arrow.png" className='arrow left'   alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right'   alt=""  onClick={() => handleClick()}/>
    </div>
  )
}
