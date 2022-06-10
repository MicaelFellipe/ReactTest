import { useCurrencies } from "../../../hooks/useCurrencies";
import { useProduct } from "../../../hooks/useProduct";
import { useParams } from "react-router-dom";

export default function ChangeCurrency(currencyName){

    const { id } = useParams();

    const { data } = useCurrencies(); useProduct(id);

    let listCurrency = [data.currencies, data.product.prices.amount];
    console.log(listCurrency);

    // let found = false;
    // let CurrencyFounded = listCurrency;

    // listCurrency.forEach(listCurrency => {
    //     if(listCurrency.currencies == currencyName){
    //         found = true;
    //     }
    // })
    // if(!found){
    //     return "No currency found";
    // }
}



// let spanCurrency = document.querySelector('#currency');
// let spanPrice = document.querySelector('#price');

// // data.currencies.map(currency => {
// //     listCurrency.push({... currency, state: false})
// // })
// // console.log(listCurrency);

// export default function ChangeCurrency(currencyStringPassed){

//     let foundedCurrency = false;
//     let newCurrency = {};

//     listCurrency.forEach((currency) => {

//         if (currency.name == currencyStringPassed){
//             foundedCurrency = true;

//             newCurrency = {...currency};
//         };
//     })

//     if (foundedCurrency) {
//         spanCurrency.innerText = newCurrency.name;
//         spanPrice.innerText = newCurrency.value;
//     }

// }

// let newCoins = [];

    // data.currencies.map(coin => {
    //     newCoins.push({... coin, state: false})
    // })
    // console.log(newCoins);
