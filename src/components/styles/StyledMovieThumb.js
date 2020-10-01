import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    transition: transform 0.2s;

    :hover {
      transform: scale(1.15);
      opacity: 0.23;
    }
    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
  .h2 {
    font-weight: bolder;
  }
  .movie-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    margin: 0;
    text-align: center;
    z-index: -1;
    font-family: 'Abel', sans-serif;
    font-size: 40px;
    color: darkblue;
  }
`;
