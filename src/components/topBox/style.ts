import styled from 'styled-components';

import { lg, sm, xxl } from '../../styles/responsiveStyles';

export const TopBoxContainer = styled.div`
  h1 {
    margin-bottom: 20px;

    ${xxl`
      font-size: 24px;
    `}
  }
`
export const TopBoxList = styled.div``
export const TopBoxListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const TopBoxUser = styled.div`
  display: flex;
  gap: 20px;

  img {
    border-radius: 50%;
    object-fit: cover;

    ${xxl`
      display: none;
    `}

    ${lg`
      display: block;
    `}
  }
`
export const TopBoxUserTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .username {
    font-size: 14px;
    font-weight: 500;
  }

  .email {
    font-size: 12px;

    ${xxl`
      display: none;
    `}

    ${lg`
      display: block;
    `}
  }

  .amount {
    font-weight: 500;
  }
`