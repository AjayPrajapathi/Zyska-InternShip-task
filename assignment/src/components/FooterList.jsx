import React from "react";

export const FooterList = ({ list, heading }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold">{heading}</h1>

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
