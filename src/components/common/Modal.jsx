import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <>
      <Container toggle={props.toggle}>{props.children}</Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  left: ${(props) => (props.toggle ? "0%" : "100%")};
  height: 100%;
  width: 100%;
  transition-duration: 1s;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
