import styled from 'styled-components'

import { xxl } from "../../styles/responsiveStyles";

export const BigChartBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  
  ${xxl`
    font-size: 24px;
  `}
`
export const Chart = styled.div`
  width: 100%;
  height: 300px;
`