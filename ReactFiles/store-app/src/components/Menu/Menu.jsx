import React from "react";
import { useCategories } from "../../hooks/useCategories";
import {Bar, Navegation, Categories, CategoriesName, Logo, Action} from "./styles"
import bag from '../../assets/img/logo.png';
import SelectCurrency from "../SelectCurrency/SelectCurrency";
import CartOverlay from "../CartOverlay/CartOverlay";

export default function Menu() {

    const { error, loading, data } = useCategories();

    if(loading) return <div>spinner...</div>;

    if (error) return <div>something went wrong</div>;

    return(
        <Bar>
            <Navegation>
            {data.categories.map((categories) => {
                return (
                    <Categories>
                       <CategoriesName>{categories.name}</CategoriesName>
                    </Categories>
                )
            })}
            </Navegation>
            <Logo src={bag} />
            <Action>
                <ul>
                    <div>$</div>
                    <li>
                        <SelectCurrency />
                    </li>
                        <CartOverlay />
                </ul>
            </Action>
        </Bar>
    );
}
