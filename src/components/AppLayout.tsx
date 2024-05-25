import styled from "styled-components";
import Hero from "./Hero";
import { useGlobalState } from "../context/GlobalStateContext";
import LargeScreenLayout from "./LargeScreenLayout";
import MediumScreenLayout from "./MediumScreenLayout";
import SmallScreenLayout from "./SmallScreenLayout";
import { useEffect } from "react";
import TranslucentLayer from "./TranslucentLayer";
import Navbar from "./Navbar";

interface Prop {
  $ismenuopen: string;
}

const AppContainer = styled.main<Prop>`
  width: 100vw;
  height: 100vh;
  ${(props) => (props.$ismenuopen === "true" ? "overflow: hidden;" : "")};

  display: grid;
  grid-template-rows: 65% 35%;
  grid-template-columns: 60% 40%;

  @media (max-width: 879px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40% 40%;
  }

  @media (max-width: 596px) {
    grid-template-rows: 45% 40% 35% 40% 35%;
    grid-template-columns: 1fr;
  }
`;

function AppLayout(): JSX.Element {
  const {
    isMediumScreen,
    isSmallScreen,
    nextImage,
    previousImage,
    isMenuOpen,
  } = useGlobalState();

  useEffect(() => {
    function handleKeyEvent(e: KeyboardEvent): void {
      if (e.code === "ArrowRight") nextImage();
      if (e.code === "ArrowLeft") previousImage();
    }

    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [nextImage, previousImage]);

  return (
    <AppContainer data-testid="app-container" $ismenuopen={isMenuOpen.toString()}>
      <Navbar />

      {isMenuOpen && <TranslucentLayer />}
      <Hero />

      {!isMediumScreen && !isSmallScreen && <LargeScreenLayout />}
      {isMediumScreen && !isSmallScreen && <MediumScreenLayout />}
      {isMediumScreen && isSmallScreen && <SmallScreenLayout />}
    </AppContainer>
  );
}

export default AppLayout;
