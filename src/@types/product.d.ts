interface IProduct {
  products: [IProductsAttribute];
  productsConnection: IProductsConnection;
}

interface IProductsConnection {
  edges: [
    {
      cursor: string;
      node: IProductsAttribute;
    }
  ];
  aggregate: {
    count: number;
  };
  pageInfo: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

interface IProductsAttribute {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: {
    url: string;
  };
  category: {
    name: string;
  };
  promotion: {
    price: number;
    isActive: boolean;
  };
}
