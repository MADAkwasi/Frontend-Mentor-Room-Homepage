import styled from "styled-components";
import NavItems from "./NavItems";
import { useGlobalState } from "../context/GlobalStateContext";
import Button from "./Button";

interface Prop {
  $ismenuopen: string;
}

const Nav = styled.nav<Prop>`
  display: flex;
  gap: 7rem;
  align-items: center;
  margin-top: 3rem;
  margin-left: 3.5rem;
  position: absolute;
  width: 60%;
  transition: 0.5s all ease-in;
  z-index: 10;

  @media (max-width: 879px) {
    width: 95%;
  }

  @media (max-width: 595px) {
    width: 100%;
    padding-left: 3rem;
    margin: 0;
    gap: 5rem;
    height: 8rem;
    ${(props) =>
      props.$ismenuopen === "true"
        ? "background-color: var(--color-primary);"
        : undefined}
  }

  @media (max-width: 375px) {
    gap: 3.5rem;
    padding-left: 1.5rem;
  }
`;

const Logo = styled.img`
  @media (max-width: 530px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function Navbar(): JSX.Element {
  const { screenSize, handleOpenMenu, isMenuOpen } = useGlobalState();

  return (
    <Nav data-testid="nav-component" $ismenuopen={isMenuOpen.toString()}>
      {screenSize < 531 ? (
        <>
          {" "}
          <Button
            onClick={handleOpenMenu}
            imgSrc={
              isMenuOpen
                ? `/images/icon-close.svg`
                : `/images/icon-hamburger.svg`
            }
            imgAlt="menu"
            color="transparent"
            width="3rem"
          />{" "}
          {!isMenuOpen ? (
            <Logo src="/images/logo.svg" alt="Logo" />
          ) : (
            <NavItems color="var(--color-heading)" />
          )}
        </>
      ) : (
        <>
          {" "}
          <Logo src="/images/logo.svg" alt="Logo" />
          <NavItems color="var(--color-navitem)" />
        </>
      )}
    </Nav>
  );
}

export default Navbar;
