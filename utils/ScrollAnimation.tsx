import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Prop {
  children: React.ReactNode;
}

function ScrollAnimation({ children }: Prop): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return <>{children}</>;
}

export default ScrollAnimation;
