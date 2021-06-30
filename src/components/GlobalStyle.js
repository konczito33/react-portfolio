import { createGlobalStyle } from 'styled-components';
import { greenColor } from '../utils';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-weight: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background-color: transparent;
    color: #fff;
    transition: all .5s ease;
    border: 3px solid ${greenColor};
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: ${greenColor};
        color: #fff;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: #fff;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
        font-weight: bold;
    color: ${greenColor};
}
p{
    padding: 3rem 0rem;
    font-size: 1.4rem;
    color: #ccc;
    line-height: 150%;
}
`;

export default GlobalStyle;
