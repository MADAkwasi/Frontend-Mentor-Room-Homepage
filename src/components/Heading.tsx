import styled, { css } from "styled-components";

type Props = {
  $be: "about" | "discover";
};

const Heading = styled.h1<Props>`
  color: var(--color-heading);

  ${(props) =>
    props.$be === "discover" &&
    css`
      font-size: 3.8rem;
      font-weight: 600;

      @media (max-width: 1025px) {
        font-size: 3.5rem;
      }

      @media (max-width: 955px) {
        font-size: 3.2rem;
      }

      @media (max-width: 785px) {
        font-size: 3rem;
      }

      @media (max-width: 605px) {
        font-size: 2.8rem;
      }
    `}

  ${(props) =>
    props.$be === "about" &&
    css`
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 0.8rem;

      @media (max-width: 955px) {
        font-size: 1.3rem;
      }

    `}
`;

export default Heading;
