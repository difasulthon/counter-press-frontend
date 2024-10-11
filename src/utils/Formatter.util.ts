export const getCapitalizeEachWord = (param: string): string => {
  const result = param
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return result;
};

export const getCurrency = (param: number): string => {
  const result = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(param);

  return result;
};
