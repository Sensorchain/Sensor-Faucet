import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 4em;
  padding: 2rem;

  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-height: 90px;
  width: 90%;
`;

export const LogoImg = styled.img`
  max-height: 100%;
  margin-left: 3em;

  @media screen and (max-width: 600px) {
    margin-left: 0.5rem;
    width: 130px;
  }
`;

export const ConnectButton = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  border-radius: 12px;
  align-self: center;
  border: none;
  background: linear-gradient(97deg,#0039ff 17.25%,#f0c0fa 66.83%,#0039ff 109.06%);
  font-weight: 700;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 40%);
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;
