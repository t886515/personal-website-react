import style from 'styled-components';

export const CardSummary = style.div`
  padding: 5% 5% 3% 5%;
`;

export const CardHeader = style.div`
  background-image: url('./static/images/THD_logo.jpg');
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgb(white,.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background-blend-mode: overlay; */
`;

export const CardTitle = style.span`
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  text-align: center;
  background: #eee;
  width: 100%;
  font-size: 2.0em;
`;

export const Card = style.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  position: relative;
  width: 400px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

`;