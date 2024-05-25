import styled from "styled-components";

const Row = styled.section`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-column: 1 / span 2;

  @media (max-width: 879px) {
    grid-template-columns: 55% 45%;
  }
`;

export default Row;
