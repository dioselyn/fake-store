const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);

export default formatPrice;
