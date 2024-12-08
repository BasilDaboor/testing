import React from "react";
import ReactDOM from "react-dom/client";
function Form() {
  return (
    <div>
      <label name="user-name">Name: </label>
      <input type="text" id="user-name" required></input>
      <br />
      <label name="user-password">password: </label>
      <input type="password"></input>
      <button onClick={handleClick}>log in</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);

function handleClick() {
  console.log("hi");
}
