import styled from "styled-components";
import About from "./About";
import BackgroundImage from "./BackgroundImage";
import Discover from "./Discover";
import Row from "./Row";

const SecondRow = styled(Row)`
  grid-template-columns: 45% 55%;
`;

function MediumScreenLayout(): JSX.Element {
  return (
    <>
      <Row>
        <Discover />
        <BackgroundImage src="/images/image-about-dark.jpg" />
      </Row>
      <SecondRow>
        <BackgroundImage src="/images/image-about-light.jpg" />
        <About />
      </SecondRow>
    </>
  );
}

export default MediumScreenLayout;
