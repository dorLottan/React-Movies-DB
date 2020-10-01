import styled from 'styled-components';

export const StyledActorInfo = styled.div`
  background-size: cover !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;

  .actorinfo-content {
    max-width: 1280px;
    max-height: 450.6px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .actorinfo-info {
    color: black;
    max-width: 300px;
    padding-top: 45px;
    padding-bottom: 20px;
    text-align: center;
    margin: auto;

    h3 {
      font-family: 'Abel', sans-serif;
      font-size: 30px;
      margin: 0;
      @media screen and (max-width: 415px) {
        font-size: 19px;
        padding-top: 0px;
        color: white;
      }
    }

    h2 {
      font-family: 'Abel', sans-serif;
      font-size: 20px;
      margin: 0;
      @media screen and (max-width: 415px) {
        font-size: 12px;
        color: white;
      }
    }
    @media screen and (max-width: 415px) {
      padding-top: 6px;
    }
  }

  .small {
    font-size: 2px;
  }
  .actorinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 415px) {
      width: 37% !important;
    }
  }

  .actorinfo-text {
    font-family: 'Abel', sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    @media screen and (max-width: 692px) {
      padding-top: 0;
    }

    h1 {
      font-size: 48px;
      margin: 0;
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
      @media screen and (max-width: 415px) {
        display: none;
      }
    }

    p {
      font-size: 18px;
      line-height: 26px;
      overflow: auto;
      max-height: 290px;
      @media screen and (max-width: 692px) {
        font-size: 23px;
        max-height: 265px;
      }
    }
  }
  .center {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }
`;
