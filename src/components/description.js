import React from "react";
import styled from "styled-components";
import "../styles.css";

const DescriptionText = styled.div`
  font-family: "Aktiv Grotesk", serif;
  font-size: 19px;
  font-weight: 200;
  line-height: 34px;
  color: #777;
  margin-top: 24px;
  width: 60%;

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
`;

const Description = props => (
  <DescriptionText>{props.description}</DescriptionText>
);

export default Description;
