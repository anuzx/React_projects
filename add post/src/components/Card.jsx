import React from 'react'

export default function Card({ name,description }) {
  return (
    <div className="container">
      <div className="card">
        <img
          className="pfp"
          alt="pfp"
          src="../src/assets/pfp.png"
          width={90}
        ></img>
              <h2>{name}</h2>
              <p>{description}</p>
      </div>
    </div>
  );
}

