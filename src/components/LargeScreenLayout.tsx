import About from "./About";
import BackgroundImage from "./BackgroundImage";
import Discover from "./Discover";
import Row from "./Row";

function LargeScreenLayout(): JSX.Element {
  return (
    <>
      <Discover />
      <Row>
        <BackgroundImage src="/images/image-about-dark.jpg" />
        <About />
        <BackgroundImage src="/images/image-about-light.jpg" />
      </Row>
    </>
  );
}

export default LargeScreenLayout;
