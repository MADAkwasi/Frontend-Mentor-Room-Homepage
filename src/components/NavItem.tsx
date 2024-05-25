import { styled } from "styled-components";
import Link from "./Link";

interface NavItemProps extends ItemProps {
  text: string;
}

interface ItemProps {
  color: string;
}

const Item = styled.li<ItemProps>`
  color: ${(props) => props.color};
  list-style: none;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${(props) => props.color};
  }
`;

function NavItem({ color, text }: NavItemProps): JSX.Element {
  return (
    <Item color={color}>
      <Link $linkfor="Navitem" color={color} text={text} />
    </Item>
  );
}

export default NavItem;
