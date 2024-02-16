export const GET_HOME = `
  query {
    products(
      first: 10
      where: {promotion: {isActive: true}}
      orderBy: publishedAt_DESC
    ) {
      id
      name
      price
      image {
        url
      }
      promotion {
        price
        isActive
      }
      category {
        name
        slug
      }
    }
  }
`;

export const GET_PRODUCTS_BY_SEARCH = (
  currentPage: number,
  pageSize: number,
  query: string,
  orderBy: string
) => `
  query {
    productsConnection(
      first: ${pageSize}
      skip: ${currentPage * pageSize - pageSize}
      where: {name_contains: "${query}"} 
      orderBy: ${orderBy}
    ) {
      edges {
        cursor
        node {
          id
          name
          price
          image {
            url
          }
          promotion {
            price
            isActive
          }
          category {
            name
            slug
          }
        }
      }
      aggregate {
        count
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = (
  currentPage: number,
  pageSize: number,
  slug: string,
  orderBy: string
) => `
  query {
    productsConnection(
      first: ${pageSize}
      skip: ${currentPage * pageSize - pageSize}
      where: {category: {slug: "${slug}"}}
      orderBy: ${orderBy}
    ) {
      edges {
        cursor
        node {
          id
          name
          price
          image {
            url
          }
          promotion {
            price
            isActive
          }
          category {
            name
            slug
          }
        }
      }
      aggregate {
        count
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
