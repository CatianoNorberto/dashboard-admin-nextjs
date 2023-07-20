import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  span{

    &:first-child{
      font-weight: bold;
    }

    &:last-child{
      font-size: 14px;
    }
  }
`