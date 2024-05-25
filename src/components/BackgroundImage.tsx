import styled from "styled-components";

interface Source {
  src: string;
}

const Body = styled.section<Source>`
  background-image: url(${(props) => props.src});
  background-position: 0% 0%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
`;

function BackgroundImage({ src }: Source): JSX.Element {
  return <Body src={src}></Body>;
}

export default BackgroundImage;
