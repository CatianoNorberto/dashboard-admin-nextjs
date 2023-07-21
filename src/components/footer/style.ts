import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const FooterHeader = styled.div`
  margin-bottom: 40px;
  img{
    width: 100%;
    height: 100%;
  }
`

export const FooterContent = styled.div`
  width: 100%;
  height: 450px;
  margin: auto;
  max-width: 64rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FooterBoxContent = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #1c3c50;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: #74a5b5;
    margin-top: 30px;
    font-weight: 400;

    &:hover {
      color: #74a5b5;
    }
  }

  p{
    font-weight: 400;
    margin-top: 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 10px 0;
  }
`;

export const FooterContainerCopyright = styled.div`
  width: 100%;
  border-top: 1px solid #d0d1d2;
`
export const FooterCopyContent = styled.div`
  max-width: 64rem;
  margin: auto;
  width: 100%;
  padding: 40px 0;
  color: #888888;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    word-spacing: 2px;
    font-size: 12px;
    font-weight: 300;
    line-height: 140%;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const FooterCopyRight = styled.div`
  display: flex;

  p{
    display: flex;
    align-items: center;
    column-gap: 4px;
    word-spacing: 2px;
    font-size: 12px;
    font-weight: 600;
    line-height: 140%;
  }

  a{
    font-weight: 700;
    text-decoration: none;
    color: #00c8f8;
  }
`

export const Divider = styled.div`
  width: 2px;
  border-top: 16px solid #d0d1d2;
`

export const Newsletter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NewsletterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 16px;
  /* background: #f7f8fb; */
  border-radius: 50%;
`