import style from 'styled-components';

export const InsideCard = style.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-out;
  overflow: hidden;
`;

export const InsideCardImage = style.img`
    opacity: 1;
    display: block;
`;

export const Card = style.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  position: relative;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  &:hover ${InsideCard} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transform: scale(0.9);
    transition: all 0.3s ease-in;
    overflow: hidden;
  }

  &:hover ${InsideCardImage} {
    opacity: 0.4;
  }

`;