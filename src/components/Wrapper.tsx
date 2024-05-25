import styled from "styled-components";

interface Prop {
  $position: string;
  height?: string;
}

const Wrapper = styled.div<Prop>`
  display: flex;
  position: absolute;
  bottom: 0;
  height: ${(props) => (props.height ? props.height : "6.5rem")};
  width: 25%;
  ${(props) => (props.$position === "left" ? "left: 0;" : "right: 0;")}
`;

export default Wrapper;
