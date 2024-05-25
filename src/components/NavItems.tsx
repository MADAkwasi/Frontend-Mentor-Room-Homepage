import styled from "styled-components";
import Button from "./Button";
import { useDarkMode } from "../context/DarkModeContext";
import Text from "./Text";
import { useGlobalState } from "../context/GlobalStateContext";
import NavItem from "./NavItem";
import { navLinks } from "../../utils/NavLinks.ts";

interface Props {
  color: string;
}

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  transition: 0.5s all ease-in;
  align-items: center;
`;

const Icon = styled.div`
  position: absolute;
  right: 6%;
  text-align: center;
  margin-right: 1rem;

  @media (max-width: 375px) {
    right: 4%;
  }
`;

function NavItems({ color }: Props): JSX.Element {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const { isMenuOpen, isSmallScreen } = useGlobalState();

  return (
    <NavList>
      {navLinks.map((link, i) => (
        <NavItem color={color} text={link} key={i} />
      ))}

      <Icon>
        <Button
          color="transparent"
          imgSrc={
            isMenuOpen && !isDarkMode
              ? `/images/icon-menu-moon.svg`
              : !isDarkMode
                ? `/images/icon-moon.svg`
                : `/images/icon-sun.svg`
          }
          imgAlt="theme-icon"
          onClick={toggleDarkMode}
        />

        <Text
          $textfor="icon"
          color={!isSmallScreen ? "var(--color-navitem)" : ""}
        >
          {isDarkMode ? `Light Mode` : `Dark Mode`}
        </Text>
      </Icon>
    </NavList>
  );
}

export default NavItems;
