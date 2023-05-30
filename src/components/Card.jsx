import React from "react";

function Card(props) {
  return (
    <div>
      <img
        src={props.img}
        alt="avatar_img"
        style={{
          // borderRadius: "50%",
          marginTop: "60px",
          marginBottom: "20px",
          width: "220px",
          height: "200px",
          display: "block"
        }}
      />
      <h2>{props.name}</h2>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
