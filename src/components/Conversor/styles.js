import styled from 'styled-components';

export const Container = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    margin: 2em auto;
    background-color: rgba(0,1,10, 0.8);
    box-shadow: 1px 1px 3px 1px black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const ContainerSelect = styled.article `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 400px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;


export const Input = styled.input`
    font-size: 1.5em;
    text-align: center;
    border: none;
    color: white;
    outline: 0;
    background-color:transparent;
    border-bottom: 1px solid chartreuse;
    width: 180px;
    &:focus{
        border-bottom: 1px solid white;
    }
`;

export const Button = styled.button`
    padding: 1em 0.75em;
    font-weight: 600;
    font-size: 1.1em;
    color: black;
    background-color: chartreuse;
    border: none;
    cursor: pointer;
    box-shadow: 1px 2px 3px 1px black;
    &:hover{
        background-color: white;
    }
`;

export const Title = styled.h3`
    border: none;
    color: chartreuse;
    font-size: 1.5em;
`;