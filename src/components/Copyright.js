import React from "react";

const Copyright = () => {
  let year = new Date().getFullYear();
  return (
    <div className="credits">
      <p>Dark Room 2020 - {year}</p>
    </div>
  );
};

export default Copyright;
