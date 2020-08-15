import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Room.scss";
import deaultImg from "../../images/room-1.jpeg";
export default function Room({ room }) {
  const { images, name, slug, price } = room;

  return (
    <article className="room">
      <div className="image-container">
        <img src={images[0] || deaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/room/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
