import { useEffect, useState } from "react";
import axios from "axios";

function useHandleStore() {
  let filteredProducts = [];
  const API = "https://fakestoreapi.com";
  const [loading, setLoading] = useState(true);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalCart, setOpenModalCart] = useState(false);
  const [openModalPurchase, setOpenModalPurchase] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [product, setProduct] = useState([]);
  const [productRate, setProductRate] = useState([]);
  const [productsAdded, setProductsAdded] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buyer, setBuyer] = useState([]);

  //CATEGORIES
  const getDataCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/products/categories`);
      response.data.unshift("all");
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  //PRODUCTS
  const getDataProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  //PRODUCTS FILTERED
  if (filterValue === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  //SINGLE PRODUCT
  const getDataProduct = async (idProduct) => {
    try {
      setLoadingProduct(true);
      if (idProduct.length > 0) {
        const response = await axios.get(`${API}/products/${idProduct}`);
        setProduct(response.data);
        setProductRate(response.data.rating.rate);
        setLoadingProduct(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  //ADD PRODUCT TO CART
  const addCart = (id, quantity) => {
    let result = [];
    let totalProductsAdded = 0;
    let total = 0;
    if (id.length != 0) {
      productsAdded.push({
        id: id,
        quantity: quantity,
      });
    }

    for (let i = 0; i < productsAdded.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (products[j].id === productsAdded[i].id) {
          result.push({
            id: products[j].id,
            title: products[j].title,
            price: products[j].price,
            quantity: productsAdded[i].quantity,
            subtotal: products[j].price * productsAdded[i].quantity,
            image: products[j].image,
          });

          totalProductsAdded += productsAdded[i].quantity;
        }
      }
    }

    result.map((item) => (total += item.subtotal));

    setCart(result);
    setTotalItems(totalProductsAdded);
    setTotalPrice(total);
  };

  const resetCart = () => {
    setProductsAdded([]);
    setCart([]);
    setTotalItems(0);
    setTotalPrice(0);
    console.log("reset");
  };

  useEffect(() => {
    getDataCategories();
    getDataProducts();
    getDataProduct();
  }, []);

  return {
    loading,
    loadingProduct,
    error,
    categories,
    openModal,
    openModalCart,
    openModalPurchase,
    openModalSuccess,
    product,
    productRate,
    totalItems,
    totalPrice,
    cart,
    buyer,
    filteredProducts,
    setFilterValue,
    setOpenModal,
    setOpenModalCart,
    setOpenModalPurchase,
    setBuyer,
    setOpenModalSuccess,
    setCart,
    getDataProduct,
    addCart,
    resetCart,
  };
}

export { useHandleStore };
