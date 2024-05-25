import About from "./About";
import BackgroundImage from "./BackgroundImage";
import Discover from "./Discover";

function SmallScreenLayout(): JSX.Element {
  return (
    <>
      <Discover />
      <BackgroundImage src="/images/image-about-dark.jpg" />
      <About />
      <BackgroundImage src="/images/image-about-light.jpg" />
    </>
  );
}

export default SmallScreenLayout;
