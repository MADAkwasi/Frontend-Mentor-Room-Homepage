import styled from "styled-components";

const Layer = styled.section`
  position: absolute;
  height: 100%;
  width: 100vw;
  background-color: #000;
  z-index: 1;
  opacity: 0;
  overflow: hidden;

  animation-duration: 0.5s;
  animation-name: show;
  animation-fill-mode: forwards;

  @keyframes show {
    100% {
      opacity: 0.6;
    }
  }
`;

function TranslucentLayer(): JSX.Element {
  return <Layer></Layer>;
}

export default TranslucentLayer;
