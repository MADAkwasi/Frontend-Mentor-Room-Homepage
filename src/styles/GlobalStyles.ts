import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

&.dark-mode{

  --color-text: hsl(220, 50%, 70%);
--color-highlight: hsl(220, 50%, 50%);
--color-heading: hsl(220, 100%, 90%);
--color-primary: hsl(220, 30%, 10%);
--color-navitem: hsl(220, 95%, 93%);
--color-btn: hsl(220, 50%, 50%);
--color-btn-hover: hsl(220, 50%, 70%);

--backdrop-color: rgba(0, 0, 0, 0.3);

--image-grayscale: 20%;
--image-opacity: 90%;
}

&.light-mode{

  --color-text: hsl(0, 0%, 63%);
  --color-highlight:  hsl(0, 0%, 27%);

--color-heading:  hsl(0, 0%, 0%);

--color-primary: hsl(0, 0%, 100%);
--color-navitem: hsl(0, 0%, 100%);

--color-btn: hsl(0, 0%, 0%);
--color-btn-hover: hsl(0, 0%, 27%);

--image-grayscale: 0;
--image-opacity: 100%;

  
}

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s filter 0.3s
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;

  @media (max-width: 1080px){
    font-size: 60%;
  }

  @media (max-width: 879px){
    font-size: 58%;
  }
}

body {
  font-family: "League Spartan", sans-serif;
  color: var(--color-text);
  font-optical-sizing: auto;
  background-color: var(--color-primary);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  font-size: 1.2rem;
}

`;

export default GlobalStyles;
