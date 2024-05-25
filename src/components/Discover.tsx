import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import Button from "./Button";
import Link from "./Link";
import { useGlobalState } from "../context/GlobalStateContext";
import Wrapper from "./Wrapper";

const Body = styled.section`
  background-color: var(--color-primary);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 0 2rem;
  width: 80%;

  @media (max-width: 1070px) {
    width: 85%;
    padding: 0 1.8rem;
  }

  @media (max-width: 755px) {
    width: 90%;
    padding: 0 1rem;
  }
`;

function Discover(): JSX.Element {
  const {
    imageNum,
    nextImage,
    previousImage,
    descriptions,
    headings,
    isMediumScreen,
  } = useGlobalState();

  return (
    <Body data-aos="zoom-in">
      <Container>
        <Heading data-testid='heading' $be="discover">{headings[imageNum - 1]}</Heading>
        <Text $textfor="paragraph">{descriptions[imageNum - 1]}</Text>
        <Link
          text="SHOP NOW"
          color="var(--color-heading)"
          $hover="var(--color-text)"
          $linkfor="Linkbtn"
        />

        {!isMediumScreen && (
          <Wrapper $position="left">
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
      </Container>
    </Body>
  );
}

export default Discover;
