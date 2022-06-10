import {useQuery, gql} from "@apollo/client";

const GET_CURRENCIES = gql`
query{
 	currencies{
    symbol
    label
  }
}
`;

export const useCurrencies = () => {
    const { error, data, loading } = useQuery(GET_CURRENCIES);

    return {
        error,
        data,
        loading,
    };
};