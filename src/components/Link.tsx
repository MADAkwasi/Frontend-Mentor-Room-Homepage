import { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  color: string;
  $linkfor?: "Navitem" | "Linkbtn";
  $hover?: string;
}

const Tag = styled.a<Props>`
  cursor: pointer;

  ${(props) =>
    props.$linkfor === "Navitem" &&
    css`
      color: ${props.color};
      font-weight: 600;
    `}
  ${(props) =>
    props.$linkfor === "Linkbtn" &&
    css`
      color: ${props.color};
      font-size: 1.6rem;
      letter-spacing: 1rem;
      font-weight: 500;
      display: inline-block;

      &:hover {
        color: ${props.$hover};
      }

      @media (max-width: 930px) {
        font-size: 1.4rem;
        margin-top: 0.6rem;
      }

      @media (max-width: 605px) {
        font-size: 1.2rem;
        letter-spacing: 0.8rem;
      }
    `};
`;

function Link({
  text,
  imgSrc,
  imgAlt,
  $linkfor,
  color,
  $hover,
}: Props): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tag
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $linkfor={$linkfor}
      color={color}
      $hover={$hover}
      onClick={(e) => e.preventDefault()}
    >
      {text} {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />}{" "}
      {$linkfor === "Linkbtn" && (
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            fill={isHovered ? $hover : color}
            fillRule="nonzero"
          />
        </svg>
      )}
    </Tag>
  );
}

export default Link;
