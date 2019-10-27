import React from "react";
import styled from "styled-components";

const SubTitleText = styled.div`
  font-family: "Aktiv Grotesk", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  letter-spacing: -0.03em;
  line-height: 52px;
  color: #222;
  margin-top: 120px;

  @media only screen and (min-width: 420px) and (max-width: 768px) {
    /* font-size: 32px; */
    /* line-height: 36px; */
    /* margin-top: 64px; */
  }

  @media only screen and (max-width: 420px) {
    font-size: 28px;
    line-height: 42px;
    margin-top: 64px;
  }
`;

const SubTitle = props => <SubTitleText>{props.subtitle}</SubTitleText>;

export default SubTitle;
