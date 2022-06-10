import { gql, useQuery } from "@apollo/client"

const GET_PRODUCT = gql`
    query GetProduct($id: String!){
    product(id: $id) {
        id
        name
        gallery
        description
        attributes{
        id
        name
        items{
            id
            displayValue
            value
            }
        }
        brand
        prices{
        currency{
            symbol
        }
        amount
        }
    }
    }
`;

export const useProduct = (id) => {
    const {data, error, loading} = useQuery(GET_PRODUCT, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading,
    };
};
