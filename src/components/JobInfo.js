import Wrapper from "../assets/wrappers/JobInfo";

import React from "react";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <div className="text">{text}</div>
    </Wrapper>
  );
};

export default JobInfo;
