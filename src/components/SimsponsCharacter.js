import React from "react";

function SimsponsCharacter(props) {
  console.log(props);
  return (
    <div>
      simspons
      {/* <h1>{props.user.name}</h1> */}
      <h1>{props.name}</h1>
    </div>
  );
}

export default SimsponsCharacter;
