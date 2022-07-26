import React from 'react'
import { Label, Select } from './styles';

export default function SelectCoin({text, value, onChange}) {
    // lista de moedas
    const options = ['USD', 'EUR', 'CAD', 'BRL', 'RUB', 'CNY'];

    return (
        <>
            <Label htmlFor="coin">{text}</Label>
            <Select value = {value} onChange = {onChange}>            
                {options.map( (coin, i) => 
                <option key = {i} value = {coin}>
                    {coin}
                </option>
                )}
            </Select>
        </>
    
    )
}
