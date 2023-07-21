import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 65%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    width: 20rem;
    height: 19rem;

    svg {
      margin-left: -110px !important;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      width: 100%;
      height: 4rem;
      border-radius: 5px;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #3ba6ff;
      margin-top: 2rem;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    .image {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 22rem !important;
        height: 21rem !important;
        margin-left: 0px !important;
      }
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #e02041;
`;

export const Subtitle = styled.strong`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #e02041;
`;
