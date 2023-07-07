import React, { useState } from 'react';
import './collapses.css';

function EquipmentItem({ data }) {
  const [equipmentVisible, setEquipmentVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleEquipment = () => {
    setEquipmentVisible(!equipmentVisible);
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <div className="descriptions">
      <div id="description">
        <button onClick={toggleDescription}>
          description
          <i className={`fa-solid fa-chevron-up desc ${descriptionVisible ? 'open' : ''}`} />
        </button>
        <div id="descriptions" className={descriptionVisible ? 'open' : ''}>
          <p>{data.description}</p>
        </div>
      </div>
      <div id="equipement">
        <button onClick={toggleEquipment}>
          équipements
          <i className={`fa-solid fa-chevron-up equip ${equipmentVisible ? 'open' : ''}`} />
        </button>
        <div id="equipment" className={equipmentVisible ? 'open' : ''}>
          {data.equipments &&
            data.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default EquipmentItem;