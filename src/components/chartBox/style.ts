import styled from 'styled-components'

import { sm, xxl } from '../../styles/responsiveStyles';

export const ChartBoxContainer = styled.div`
  display: flex;
  height: 100%;

  ${sm`
    display: none;
  `}
`
export const BoxInfon = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${sm`
    gap: 20px;
  `}
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${xxl`
    font-size: 14px;
  `}

  h1{
    ${xxl`
      font-size: 20px;
    `}
  }
`
export const ChartInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Chart = styled.div`
  width: 100%;
  height: 100%;
`
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  .percentage{
    font-weight: bold;
    font-size: 20px;

    ${xxl`
      font-size: 16px;
    `}
  }

  .duration{
    font-size: 14px;
  }
`