import styled from "styled-components";

interface ButtonProps {
  color: string;
  onClick: () => void;
  imgSrc?: string;
  imgAlt?: string;
  $hover?: string;
  width?: string;
}

const Btn = styled.button<ButtonProps>`
  background-color: ${(props) => props.color};
  border: none;
  width: ${(props) => props.width || "50%"};
  height: 100%;
  bottom: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hover};
  }
`;

function Button({
  color,
  onClick,
  imgSrc,
  imgAlt,
  $hover,
  width,
}: ButtonProps): JSX.Element {
  return (
    <Btn
      onClick={onClick}
      color={color}
      $hover={$hover}
      width={width}
      data-testid={$hover ? "slider-button" : "theme-button"}
    >
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />}
    </Btn>
  );
}

export default Button;
