import React, { useState } from "react";
import { Dropdown, DropdownSelect, Select, ChevronIcon, DropdownList, DropdownListItem } from "./styles";
import chevron from '../../assets/img/chevrondown.png';
import { useCurrencies } from "../../hooks/useCurrencies";
import ChangeCurrency from "../SelectCurrency/ChangeCurrency/ChangeCurrency";

export default function SelectCurrency() {

    const [drop, setDrop] = useState(false);

    function handleContent() {
        setDrop(!drop);
    }

    return (
        <Dropdown>
            <DropdownSelect onClick={handleContent}>
                <Select>
                    <ChevronIcon src={chevron} />
                </Select>
            </DropdownSelect>
            {drop && <DropList />}
        </Dropdown>
    );

    function DropList(){

        const { error, loading, data } = useCurrencies();
    
        if(loading) return <div>spinner...</div>;
    
        if (error) return <div>something went wrong</div>;
        
        return (
            <DropdownList>
                    {data.currencies.map((currencies) => {
                        return (
                            <DropdownListItem onClick={ChangeCurrency}>{currencies.symbol} {currencies.label}</DropdownListItem>
                        )
                    })}
            </DropdownList>
        )
    }
}