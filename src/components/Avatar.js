import React from "react";

function Avatar(props) {
  const { image, firstName, lastName } = props;
  return (
    <div>
      <img src={image} />
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
}

export default Avatar;
