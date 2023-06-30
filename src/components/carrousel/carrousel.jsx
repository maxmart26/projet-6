import React from 'react';


let p = 0;
let i = 0;
function ImageCarrousel({data}) {
  p = 0
  return(
  <div className="container">
  <div id="carrousel">
      {data.pictures &&
      data.pictures.map((picture) => (
         i = data.pictures.length,
          <img src={picture} alt="Image du carrousel" />
          
  ))}
  </div>
  <div className="button-carrousel">
      <button className="bouton" id="g" onClick={previousImage}><i class="fa-solid fa-chevron-up"></i></button>
      <button className="bouton" id="d" onClick={nextImage}><i class="fa-solid fa-chevron-up"></i></button>
  </div>
</div>
)
};

export default ImageCarrousel;


const previousImage = () => {
  const ImageCarrousel = document.getElementById("carrousel")
   if(p<0){
  p++;
  ImageCarrousel.style.transform="translate("+p*100+"%)";
  ImageCarrousel.style.transition="all 0.5s ease";
  }
  else if(p == 0){
    p=-i+1
    ImageCarrousel.style.transform="translate("+p*100+"%)";
    ImageCarrousel.style.transition="all 0.5s ease";
  }
}


const nextImage = () => {
  console.log(i);
  console.log(p);
  const ImageCarrousel = document.getElementById("carrousel")
  if(p>-i+1){
  p--;
  ImageCarrousel.style.transform="translate("+p*100+"%)";
  ImageCarrousel.style.transition="all 0.5s ease";
  }
  else if(p == -i+1){
    p=0
    ImageCarrousel.style.transform="translate("+p*100+"%)";
    ImageCarrousel.style.transition="all 0.5s ease";
  }


}