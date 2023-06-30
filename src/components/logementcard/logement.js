import React from 'react';
import { Link } from 'react-router-dom';
import "./logement.css"
const LogementItem = ({ id, cover, title }) => {
  return (
    <Link to={`/house/${id}`} className="box" key={id}>
      <figure>
        <img src={cover} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  );
};

export default LogementItem;