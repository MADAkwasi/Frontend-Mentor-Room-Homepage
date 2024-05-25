import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ContextValue {
  imageNum: number;
  setImageNum: React.Dispatch<React.SetStateAction<number>>;
  nextImage: () => void;
  previousImage: () => void;
  descriptions: string[];
  headings: string[];
  isMediumScreen: boolean;
  setIsMediumScreen: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallScreen: boolean;
  setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenMenu: () => void;
}

const GlobalStateContext = createContext<ContextValue | undefined>(undefined);

function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [imageNum, setImageNum] = useState(1);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const descriptions = [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  ];
  const headings = [
    `Discover innovative ways to decorate`,
    `We are available all across the globe`,
    `Manufactured with the best materials`,
  ];

  function nextImage() {
    if (imageNum < 3) {
      setImageNum((num) => num + 1);
    } else {
      setImageNum(1);
    }
  }

  function previousImage() {
    if (imageNum > 1) {
      setImageNum((num) => num - 1);
    } else {
      setImageNum(3);
    }
  }

  function handleOpenMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    function handleResize() {
      setIsMediumScreen(window.innerWidth < 880);
      setIsSmallScreen(window.innerWidth < 597);
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue: ContextValue = {
    imageNum,
    setImageNum,
    nextImage,
    previousImage,
    descriptions,
    headings,
    isMediumScreen,
    setIsMediumScreen,
    screenSize,
    setScreenSize,
    isMenuOpen,
    setIsMenuOpen,
    handleOpenMenu,
    isSmallScreen,
    setIsSmallScreen,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}

function useGlobalState(): ContextValue {
  const context = useContext(GlobalStateContext);

  if (context === undefined)
    throw new Error(
      "GlobalStateContext was used outside of GlobalStateProvider"
    );

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { GlobalStateProvider, useGlobalState };
