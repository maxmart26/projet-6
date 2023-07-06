import React from 'react';
import { useState } from 'react';

let p = 0;
let i = 0;
function ImageCarrousel({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousImage = () => { 
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
    );
  }
  
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1
    );
  }
  return(
  <div className="container">
  <div id="carrousel">
        {data.pictures &&
          data.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt="Image du carrousel"
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            />
          ))}
      </div>
  <div className="image-counter">{`${currentIndex + 1}/${data.pictures.length}`}</div>
  <div>
    
  </div>
  {data.pictures.length > 1 && (
        <div className="button-carrousel">
          <button className="bouton" id="g" onClick={previousImage}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
          <button className="bouton" id="d" onClick={nextImage}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      )}
</div>
)
};

export default ImageCarrousel;

