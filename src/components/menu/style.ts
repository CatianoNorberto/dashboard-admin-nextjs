
import { colors } from '../../styles/color';
import { lg } from '../../styles/responsiveStyles';

import styled from 'styled-components'

export const MenuContainer = styled.div``
export const MenuContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  .title {
    font-size: 12px;
    font-weight: 200;
    color: ${colors.softColor};
    text-transform: uppercase;

    ${lg`
      display: none;
    `}
  }

  a{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background-color: ${colors.softBg};
    }

    .listItemTitle{
      ${lg`
        display: none;
      `}
    }
  }
`