import React, { useState } from 'react';
import SelectCoin from '../SelectCoin/SelectCoin';
import { Container, Input, Button, Title, ContainerSelect } from './styles';

export default function Conversor() {

    // useState dos valores das moedas: input e valor inicial de 0 da moeda B
    const [valueA, setValueA] = useState('');
    let [valueB, setValueB] = useState(0);

    // useState da lista de moedas
    const [nameA, setNameA] = useState('USD');
    const [nameB, setNameB] = useState('BRL');

    // funcao que identifica qual o valor do select clicado do filho
    const handleChangeCoin = (func) => {
        return (e) => {
            func(e.target.value)
            console.log('handleSelectCoin', e.target.value);
        }
    }

    // metodo de conversão de valores entre moedas
    const handleClick = (e) => {

        if( valueA !== '' ) {       
            const changeCoin = `${nameA}-${nameB}`; // USD-BRL
            const jsonResult = `${nameA}${nameB}`; // USDBRL
            const url = 
            `https://economia.awesomeapi.com.br/json/last/${changeCoin}`;
        
            // usar fetch api
            fetch(url)
            .then(res => res.json())
            .then(json => {
                let exchangeRate = json[jsonResult].high;
                valueB = (parseFloat(valueA) * exchangeRate).toFixed(2);
                setValueB(valueB);
            })
            
        } 
    };

    return (
        <Container>
            <ContainerSelect>
                <Input 
                    type = "text" 
                    placeholder = "Search"
                    onChange = { (e) => setValueA(e.target.value) }>
                </Input>
                <SelectCoin 
                    value={nameA} 
                    onChange={handleChangeCoin(setNameA)} 
                />
            </ContainerSelect>
            <ContainerSelect>
                <Button 
                    type = "button" 
                    onClick={handleClick}>
                    Converter &#128530;
                </Button>
            </ContainerSelect>
            <ContainerSelect>
                <Title>
                    {valueB} {nameB}
                </Title>
                <SelectCoin 
                    text='From'
                    value={nameB} 
                    onChange={handleChangeCoin(setNameB)} 
                />
            </ContainerSelect>
        </Container>
    )
}
