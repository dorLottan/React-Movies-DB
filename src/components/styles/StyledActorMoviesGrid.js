import styled from 'styled-components';

export const StyledActorMoviesGrid = styled.div`
  font-family: 'Abel', sans-serif;

  @media screen and (max-width: 475px) {
    position: relative;
    text-align: center;
  }
  .items {
    display: flex;
    overflow-x: auto;
    max-width: 975px;
    margin-top: -22px;
  }
  .items img {
    width: 200px;
    height: 245px;
    background: green;
    margin: 10px;
    box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 0.9);
  }

  .items h1 {
    text-align: center;
  }
  .items p {
    text-align: center;
    font-size: x-large;
  }
`;
