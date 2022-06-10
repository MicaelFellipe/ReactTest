import {useQuery, gql} from "@apollo/client";

const GET_CATEGORY = gql`
query{
    category {
      products{
        id
        gallery
        name
        brand
        prices{
          currency{
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const useCategory = () => {
    const { error, data, loading } = useQuery(GET_CATEGORY);

    return {
        error,
        data,
        loading,
    };
};