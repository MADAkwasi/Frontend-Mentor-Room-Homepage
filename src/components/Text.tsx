import styled, { css } from "styled-components";

interface Prop {
  $textfor: "icon" | "paragraph";
  color?: string;
}

const Text = styled.p<Prop>`
  line-height: 1.5;

  ${(props) =>
    props.$textfor === "icon" &&
    css`
      margin: 0;
      ${props.color
        ? `color: ${props.color};`
        : "color: var(--color-heading);"};
    `}

  ${(props) =>
    props.$textfor === "paragraph" &&
    css`
      margin: 2.5rem 0;

      @media (max-width: 785px) {
        margin: 2rem 0;
      }
    `}
`;

export default Text;
