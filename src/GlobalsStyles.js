import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
    body{
        color: ${({theme})=> theme.text};
        background-color: ${({theme}) => theme.body};
        transition: ${({theme}) => theme.transition};
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    img{
        display: block;
        object-fit: cover;
    }
    button{
        color: ${({theme}) => theme.text};
        padding: 5px;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
    input{
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({theme}) => theme.text};
    }
`