import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const Body = styled.section`
  background-color: var(--color-primary);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  padding: 0 2rem;
  margin-top: 1.5rem;

  @media (max-width: 1012px) {
    padding: 0 1.5rem;
    width: 93%;
  }

  @media (max-width: 613px) {
    padding: 0 1rem;
    width: 93%;
  }

  @media (max-width: 596px) {
    padding: 0 1.5rem;
    width: 90%;
  }
`;

function About(): JSX.Element {
  return (
    <Body data-aos="fade-right">
      <Container>
        <Heading $be="about">ABOUT OUR FURNITURE</Heading>
        <Text $textfor="paragraph">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Text>
      </Container>
    </Body>
  );
}

export default About;
