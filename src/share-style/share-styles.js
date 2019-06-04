import style, { keyframes } from 'styled-components';

export const Button = style.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 7px;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 17px;
`;

//#4682BF nice dark blue color

export const H3 = style.h3`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #172b40;
`;

export const NavBarDiv = style.div`
  margin: 8px;
  background-color: black;
  border-radius: 5px;
`;

export const H1 = style.h1`
  font: 'Raleway', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: #2f567f;
  text-align: center;
`;

export const SubmitButton = style.input`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 7px;
  background: #4682bf;
  color: black;
  border: 2px solid black;
  font-size: 14px;
`;

export const SearchButton = style.input`
  border-radius: 1px;
  padding: 0.25em 1em;
  margin: 7px;
  background: transparent;
  color: #4682bf;
  border: 2px solid #4682bf;
  font-size: 17px;
`;

export const FlexWrapper = style.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
`;

export const colors = {
  primary: '',
  secondary: '#93948c',
  tertiary: '',
  pass: '#b4ed7b',
  lightPass: '#dbffb7',
  erorr: '#ff3a47',
  lightError: '#e8b6ad',
  warning: '',
  lightWarning: '',
  gray: '#edebe9',
  darkGray: '#545251',
  grey1: '#fafafa',
  grey2: '#f5f5f5',
  grey3: '#eee',
  grey4: '#e0e0e0 !important',
  grey5: '#bdbdbd!important',
  grey6: '#9e9e9e!important',
  grey7: '#757575!important',
  grey8: '#616161!important',
  grey9: '#424242!important',
  grey10: '#212121!important'
};

const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
`;
export const FadeInTransition = style.div`
  animation: 1s ${fadeInOpacity} ease-in;
`;

export const InsideCard = style.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-out;
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
  }
`;

// const ParallaxWrapper = style.div`
//   perspective: 1px;
//   height: 80vh;
//   overflow-x: hidden;
//   overflow-y: auto;
// `;

// const ParallaxLayer = style.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `;

// const ParallaxBaseLayer = style(ParallaxLayer)`
//   transform: translateZ(0);
// `;

// const ParallaxBackLayer = style(ParallaxLayer)`
//   transform: translateZ(-1px);
// `;
