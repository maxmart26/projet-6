import React from 'react';

const equipement = () =>{
  const equip = document.getElementById("equipment")
  const icon = document.querySelector(".equip");
  if (equip.style.display === "none") {
      equip.style.display = "block";
      icon.style.transform = "rotate(180deg)";
  } else {
      equip.style.display = "none";
      icon.style.transform = "rotate(0deg)";
}
}
const description = () =>{
  const desc = document.getElementById("descriptions")
  const icon = document.querySelector(".desc");
  if (desc.style.display === "none") {
      desc.style.display = "block";
      icon.style.transform = "rotate(180deg)";
  } else {
      desc.style.display = "none";
      icon.style.transform = "rotate(0deg)";
}
}



function EquipmentItem({data}){
  return(
    <div className="descriptions">
      <div id="description">
                    <button onClick={description}>description<i class="fa-solid fa-chevron-up desc"/></button>
                    <div id="descriptions" style={{display:'none'}}>
                        <p>{data.description}</p>
                    </div>
                    </div>
                    <div id="equipement">
                        <button onClick={equipement}>équipements <i class="fa-solid fa-chevron-up equip"></i></button>
                        <div id="equipment" style={{display:'none'}}>
                            {data.equipments && data.equipments.map((equipment) => (
                            <p>{equipment}</p>
             ))}
          </div>
      </div>
    </div>
  )
}
export default EquipmentItem;