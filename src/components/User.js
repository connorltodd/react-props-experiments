import React from "react";

function User(props) {
  const { isOnline, name, email } = props;
  // console.log(props);
  return (
    <div>
      <p>Hello User: {props.name}</p>
      <p>Your email: {email}</p>
      {/* <p>
        City Address:{" "}
        {`${props.address.city} street address ${props.address.street}`}
      </p> */}
      <p>{isOnline ? "Online" : "Offline"}</p>
      {/* <p>Street Address: {props.address.street}</p> */}
    </div>
  );
}

export default User;
