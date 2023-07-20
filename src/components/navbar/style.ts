import styled from 'styled-components'

import "../../styles/responsiveStyles";

export const NavBar = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavLogo = styled.div`
   display: flex;
    align-items: center;
    font-weight: bold;
    gap: 10px;
`
export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: $sm) {
    display: none;
  }
`
export const Notifications = styled.div`
  position: relative;

  span {
    background-color: red;
    color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`
export const NavUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    object-fit: cover;
  }
`