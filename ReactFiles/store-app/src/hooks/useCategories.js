import {useQuery, gql} from "@apollo/client";

const GET_CATEGORIES = gql`
query{
  categories{
    name
    products{
      id
      gallery
      name
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

export const useCategories = () => {
    const { error, data, loading } = useQuery(GET_CATEGORIES);

    return {
        error,
        data,
        loading,
    };
};