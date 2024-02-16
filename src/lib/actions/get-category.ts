export const GET_CATEGORIES = `
  query {
    categories(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`;
