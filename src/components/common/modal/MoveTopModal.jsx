import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <>
      <Section toggle={props.toggle}>{props.children}</Section>
    </>
  );
};

const Section = styled.div`
  position: absolute;
  top: 0;
  top: ${(props) => (props.toggle ? "0%" : "100%")};
  z-index: ${(props) => (props.toggle ? 100 : 0)};
  height: 100%;
  width: 100%;
  transition-duration: 0.8s;
  background: white;
`;

export default Modal;
