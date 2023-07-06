import React, { useState } from "react";
import "./propos.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={toggleCollapse}>
          <i
            className={`fa-solid fa-chevron-up ${
              isOpen ? "rotate" : ""
            }`}
          ></i>
        </p>
      </div>
      <div
        className={`collapse__dropdown__content ${
          isOpen ? "open" : ""
        }`}
      >
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;