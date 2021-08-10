import React from "react";

const Copyright = () => {
  let year = document.write(new Date().getFullYear());
  return (
    <div className="credits">
      <p>Copyright 2020 - {year}</p>
    </div>
  );
};

export default Copyright;
