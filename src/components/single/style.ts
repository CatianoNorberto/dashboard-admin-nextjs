import styled from "styled-components";

import { sm, md, lg, xl } from '../../styles/responsiveStyles';

export const SingleContainer = styled.div`
  display: flex;

  ${xl`
    width: max-content;
  `}

  hr {
    width: 90%;
    height: 0;
    border: 0.5px solid gray;
    margin: 20px 0px;

    @include md{
      display: none;
    }
  }
`
export const SingleView = styled.div`
  flex: 1;
`
export const SingleInfo = styled.div``
export const SingleTopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    object-fit: cover;
  }

  h1 {
    font-weight: 500;
  }
`
export const SingleDetails = styled.div`
  font-size: 18px;
`
export const SingleItem = styled.div`
  margin: 30px 0px;

  .itemTitle {
    font-weight: 600;
    margin-right: 10px;
    text-transform: capitalize;
  }
`
export const SingleChart = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 400px;

  ${lg`
    display: none;
  `}
`
export const SingleActivities = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    li {
      list-style-type: none;
      position: relative;
      width: 1px;
      padding-top: 50px;
      background-color: #f45b69;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #f45b69;
        transform: translateX(-50%);
      }

      div {
        min-width: 480px;
        padding: 15px;
        background-color: #f45b6810;
        ${md`
          min-width: 250px;
        `}

        p{
          margin-bottom: 5px;
        }

        time{
          font-size: 12px;
        }
      }
    }
  }
`
