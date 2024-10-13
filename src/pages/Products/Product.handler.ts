import { Brand } from "../../types/Brand.type";
import { getCapitalizeEachWord } from "../../utils/Formatter.util";

export const getListBrand = (brands: { data: Brand[] }) => {
  const result = brands.data.map((item: Brand) => item.name.toLowerCase());

  return result;
};

export const getDocumentTitle = (brand?: string) => {
  const result = brand ? getCapitalizeEachWord(brand) : "Products";

  return result;
};
