import React from "react";
import styled from "styled-components";

const ProjectImage = styled.img`
  z-index: -10;
`;

const ProjectTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  z-index: 10;
  opacity: 0;
  transition: 0.4s ease-in-out;
`;

const Overlay = styled.div`
  background-color: rgba(17, 34, 51, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1;
  position: absolute;
  opacity: 0;
  transition: 0.4s ease-in-out;
`;

const ProjectTitle = styled.div`
  font-family: "Aktiv Grotesk", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 62.4px;
  letter-spacing: -0.03em;
  color: #fff;

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    /* font-size: 32px; */
    /* line-height: 38.4px; */
    margin-top: 8px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 32px;
    line-height: 38.4px;
    margin-top: 8px;
  }
`;

const ProjectDescription = styled.div`
  font-family: "Apercu Mono", monospace;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 8px;
  color: #dbe1e7;

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    /* font-size: 16px; */
    /* line-height: 24px; */
  }

  @media only screen and (max-width: 420px) {
    /* font-size: 14px; */
    /* line-height: 21px; */
  }
`;

const ProjectContainer = styled.div`
  position: relative;

  &:hover ${ProjectTextContainer} {
    transition: 0.4s ease-in-out;
    opacity: 1;
  }

  &:hover ${Overlay} {
    transition: 0.4s ease-in-out;
    opacity: 1;
  }
`;

const Project = props => (
  <ProjectContainer>
    <div className="ProjectContainer">
      <ProjectImage src={props.image} />
      <Overlay />
      <ProjectTextContainer>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectTitle className="ProjectTitle">{props.title}</ProjectTitle>
      </ProjectTextContainer>
    </div>
  </ProjectContainer>
);

export default Project;
