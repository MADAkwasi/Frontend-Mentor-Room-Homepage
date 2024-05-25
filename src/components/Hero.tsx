import styled from "styled-components";
import { useGlobalState } from "../context/GlobalStateContext";
import Wrapper from "./Wrapper";
import Button from "./Button";
import { useEffect, useState } from "react";

interface BodyProps {
  $num: number;
  $images: string[];
  $isloading: string;
  $initialimage: string;
}

const Body = styled.header<BodyProps>`
  background-image: ${(props) =>
    props.$isloading === "true"
      ? `url(${props.$initialimage})`
      : `url(${props.$images[props.$num - 1]});`};
  background-position: 0% 0%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  position: relative;
  transition: 0.3s all ease-in;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
`;

function Hero(): JSX.Element {
  const {
    imageNum,
    isMediumScreen,
    previousImage,
    nextImage,
    screenSize,
    isSmallScreen,
  } = useGlobalState();
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialImage = `/images/${
    isSmallScreen ? "mobile" : "desktop"
  }-image-hero-1.jpg`;

  useEffect(() => {
    const preloadImages = async () => {
      const preLoaded = await Promise.all(
        [1, 2, 3].map((num) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = `/images/${
              isSmallScreen ? "mobile" : "desktop"
            }-image-hero-${num}.jpg`;
            img.onload = () => resolve(img.src);
            img.onerror = reject;
          });
        })
      );

      setPreloadedImages(preLoaded);
      setIsLoading(false);
    };

    preloadImages();
  }, [isSmallScreen]);

  return (
    <Body
      $num={imageNum}
      $isloading={isLoading.toString()}
      $images={preloadedImages}
      $initialimage={initialImage}
      data-testid="slider"
    >
      {isMediumScreen && (
        <Wrapper
          $position="right"
          height={screenSize < 531 ? "5rem" : "6.5rem"}
        >
          <Button
            color="var(--color-btn)"
            imgSrc="/images/icon-angle-left.svg"
            imgAlt="left arrow"
            onClick={previousImage}
            $hover="var(--color-btn-hover)"
          />

          <Button
            color="var(--color-btn)"
            imgSrc="/images/icon-angle-right.svg"
            imgAlt="right arrow"
            onClick={nextImage}
            $hover="var(--color-btn-hover)"
          />
        </Wrapper>
      )}
    </Body>
  );
}

export default Hero;
