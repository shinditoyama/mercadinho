"use server";

import { GET_CATEGORIES } from "@/lib/actions/get-category";
import {
  GET_HOME,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_SEARCH,
} from "@/lib/actions/get-product";
import { fetchHygraph } from "@/lib/fetch";

export async function fetchProductOnSale(): Promise<IProduct> {
  return fetchHygraph(GET_HOME, 60);
}

export async function fetchProductBySearch(
  currentPage: number,
  pageSize: number,
  query: string,
  orderBy: string
): Promise<IProduct> {
  return fetchHygraph(
    GET_PRODUCTS_BY_SEARCH(currentPage, pageSize, query, orderBy),
    60
  );
}

export const fetchProductByCategory = async (
  currentPage: number,
  pageSize: number,
  slug: string,
  orderBy: string
): Promise<IProduct> => {
  return fetchHygraph(
    GET_PRODUCTS_BY_CATEGORY(currentPage, pageSize, slug, orderBy),
    60
  );
};

export async function fetchCategory(): Promise<ICategory> {
  return fetchHygraph(GET_CATEGORIES, 60);
}
