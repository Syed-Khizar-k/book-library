import React from "react";

const Tagtext = (props: { text: string }) => {
  return (
    <p className="flex gap-10 tag-text">
      <span className="line"></span>
      <span>{props.text}</span>
    </p>
  );
};

export default Tagtext;
