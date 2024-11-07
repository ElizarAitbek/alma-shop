import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">Alma Shop</Logo>

      <Nav>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/orders">My Orders</StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #1c1c1e;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f5f7;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #0867c5;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  color: #dedee1;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0a84ff;
  }

  &.active {
    color: #0a84ff;
    font-weight: 500;
  }
`;
