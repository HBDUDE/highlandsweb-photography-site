import React, { useState } from 'react'

import a from '../images/a.jpeg'
import b from '../images/b.jpeg'
import c from '../images/c.jpeg'
import d from '../images/d.jpeg'
import e from '../images/e.jpeg'
import f from '../images/f.jpeg'
import g from '../images/g.jpeg'
import h from '../images/h.jpeg'
import i from '../images/i.jpeg'
import j from '../images/j.jpeg'

const Gallery = () => {
  const pictureArray = [a,b,c,d,e,f,g,h,i,j]
  const [index, setIndex] = useState(0)
  const [picture, setPicture] = useState(a)

  const cyclePictures = () => {
    index < 9 ? 
      setIndex((prevIndex) => prevIndex + 1) :
      setIndex(0)
  }

  return (
    <div className="gallery-wrapper" id="gallery">
      <h1 className="text-primary section-title">Gallery</h1>

      <div className="gallery">
        <div className="picture-container">
          <img 
            className="picture" 
            src={pictureArray[index]} 
            alt=""
          />
        </div>

        <div className="button-wrapper">
          <button onClick={() => cyclePictures()}>Next photo</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery