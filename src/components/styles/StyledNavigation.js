import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #353535;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;

  .fa-home {
    position: absolute;
    top: 17px;
    float: right;
    color: #fff;
    z-index: 1000;
    margin-left: -40px;
    margin-top: -5px;
    @media screen and (max-width: 415px) {
      margin-left: -27px;
      margin-top: 2px;
    }
  }

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 50px;
    width: 100%;

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
        max-width: 210px;
      }
    }
  }
 
`;
