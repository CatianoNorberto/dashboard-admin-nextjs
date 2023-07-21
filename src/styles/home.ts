import styled from 'styled-components';

import { colors } from '../styles/color'
import { sm, md, lg, xl } from '../styles/responsiveStyles';

export const HomeContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;

  ${xl`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${lg`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${md`
    grid-template-columns: repeat(1, 1fr);
  `}
  ${sm`
    grid-auto-rows: minmax(120px, auto);
  `}
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.softBg};
`;

export const Box1 = styled(Box)`
  grid-column: span 1;
  grid-row: span 3;
`;

export const Box2 = styled(Box)`
`;
export const Box3 = styled(Box)`
`;
export const Box5 = styled(Box)`
`;
export const Box6 = styled(Box)`
`;
export const Box9 = styled(Box)`
`;
export const Box8 = styled(Box)`
`;

export const Box4 = styled(Box)`
  grid-column: span 1;
  grid-row: span 3;
`;

export const Box7 = styled(Box)`
  grid-column: span 2;
  grid-row: span 2;

  ${md`
    display: none;
  `}
`;