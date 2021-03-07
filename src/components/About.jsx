import React from "react"

import nightSkyPic from '../images/Night Sky.jpg'

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="left">
        <h1 className="text-primary section-title">About</h1>
        <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi quos perferendis aut sint ipsum asperiores consequuntur laudantium omnis praesentium, officiis saepe, at neque. Perspiciatis labore aliquam eum odio dolorem. Placeat, neque facere. Dicta vel sit assumenda, velit eligendi incidunt tempora. Laboriosam ab expedita asperiores, corporis incidunt eius explicabo culpa nihil necessitatibus porro!</p>

        <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi quos perferendis aut sint ipsum asperiores consequuntur laudantium omnis praesentium, officiis saepe, at neque. Perspiciatis labore aliquam eum odio dolorem. Placeat, neque facere. Dicta vel sit assumenda, velit eligendi incidunt tempora. Laboriosam ab expedita asperiores, corporis incidunt eius explicabo culpa nihil necessitatibus porro!</p>
      </div>

      <div className="right">
        <img className="about-img" src={nightSkyPic} alt="Grainy sillouhette of woman with camera"/>
      </div>
    </div>
  )
}

export default About