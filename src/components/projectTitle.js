import React from "react";
import styled from "styled-components";

const ProjectTitleText = styled.div`
  font-family: "Aktiv Grotesk", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  letter-spacing: -0.04em;
  line-height: 83px;
  color: #222;
  margin-top: 120px;

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    font-size: 48px;
    line-height: 62.4px;
    margin-top: 64px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 32px;
    line-height: 44.8px;
    margin-top: 64px;
  }
`;

const ProjectTitle = props => (
  <ProjectTitleText>{props.projecttitle}</ProjectTitleText>
);

export default ProjectTitle;
