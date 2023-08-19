import React from "react";

const Button = (props) => {
  const { openPage } = props;
  return (
    <>
      <div>
        <button onClick={openPage}>Click to open Modal page</button>
      </div>
    </>
  );
};

export default Button;
