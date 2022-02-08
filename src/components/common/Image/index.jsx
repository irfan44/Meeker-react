import React from 'react';
import '../../../styles/common/Image.css';

export default function Image({imgUrl, imgAlt, imgSize}){
  return(
    <div>
      <img className={(imgSize=="small") ? "img-small" : (imgSize=="medium") ? "img-medium" : (imgSize=="large") ? "img-large" : "img-medium" } src={imgUrl} alt={imgAlt}/>
    </div>
  )
}