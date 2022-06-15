import React from "react";
import { Header } from "../components/Header/Header";
import { FilterCategories } from "../components/FilterCategories/FilterCategories";
import { useHandleStore } from "../hooks/useHandleStore";
import { ButtonsCategories } from "../components/ButtonsCategories/ButtonsCategories";
import { Products } from "../components/Products/Products";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Modal } from "../components/Modal/Modal";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { ProductDetailContainer } from "../components/ProductDetailContainer/ProductDetailContainer";
import { FormAddCart } from "../components/FormAddCart/FormAddCart";
import { Cart } from "../components/Cart/Cart";
import { LinkCart } from "../components/LinkCart/LinkCart";
import { ItemCart } from "../components/ItemCart/ItemCart";
import { EmptyCart } from "../components/EmptyCart/EmptyCart";
import { ButtonBuyCart } from "../components/ButtonBuyCart/ButtonBuyCart";
import { FormPurchase } from "../components/FormPurchase/FormPurchase";
import { PreOrder } from "../components/PreOrder/PreOrder";
import { PurchaseSuccessful } from "../components/PurchaseSuccessful/PurchaseSuccessful";
import { Loading } from "../components/Loading/Loading";
import "../styles/_App.scss";
import { LoadingProduct } from "../components/LoadingProduct/LoadingProduct";
import { Error } from "../components/Error/Error";

function App() {
  const {
    loading,
    loadingProduct,
    error,
    categories,
    setFilterValue,
    filteredProducts,
    product,
    productRate,
    openModal,
    cart,
    buyer,
    openModalCart,
    openModalPurchase,
    openModalSuccess,
    setOpenModal,
    setOpenModalCart,
    setOpenModalPurchase,
    setOpenModalSuccess,
    setBuyer,
    getDataProduct,
    addCart,
    totalItems,
    totalPrice,
    resetCart,
  } = useHandleStore();

  return (
    <React.Fragment>
      <Header loading={loading}>
        <FilterCategories categories={categories}>
          {categories.map((category, index) => (
            <ButtonsCategories
              key={index}
              category={category}
              setFilterValue={setFilterValue}
            />
          ))}
        </FilterCategories>
        <LinkCart setOpenModalCart={setOpenModalCart} totalItems={totalItems} />
      </Header>

      <Products
        loading={loading}
        error={error}
        onLoading={() => <Loading />}
        onError={() => <Error />}
      >
        {filteredProducts.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            getDataProduct={getDataProduct}
            setOpenModal={setOpenModal}
          />
        ))}
      </Products>

      {openModal && (
        <Modal>
          <ProductDetailContainer
            loadingProduct={loadingProduct}
            setOpenModal={setOpenModal}
            onLoading={() => <LoadingProduct />}
          >
            <ProductDetail product={product} rate={productRate}>
              <FormAddCart
                idProduct={product.id}
                addCart={addCart}
                setOpenModal={setOpenModal}
                setOpenModalCart={setOpenModalCart}
              />
            </ProductDetail>
          </ProductDetailContainer>
        </Modal>
      )}
      {openModalCart && (
        <Modal>
          <Cart
            setOpenModalCart={setOpenModalCart}
            onEmptyCart={() => <EmptyCart />}
            onBuyCart={() => (
              <ButtonBuyCart
                setOpenModalPurchase={setOpenModalPurchase}
                setOpenModalCart={setOpenModalCart}
              />
            )}
            totalItems={totalItems}
            totalPrice={totalPrice}
          >
            {cart.map((item, index) => (
              <ItemCart item={item} key={index} />
            ))}
          </Cart>
        </Modal>
      )}
      {openModalPurchase && (
        <Modal>
          <PreOrder
            setOpenModalPurchase={setOpenModalPurchase}
            totalItems={totalItems}
            totalPrice={totalPrice}
          >
            <FormPurchase
              setBuyer={setBuyer}
              setOpenModalPurchase={setOpenModalPurchase}
              setOpenModalSuccess={setOpenModalSuccess}
              resetCart={resetCart}
            />
          </PreOrder>
        </Modal>
      )}

      {openModalSuccess && (
        <Modal>
          <PurchaseSuccessful
            setOpenModalSuccess={setOpenModalSuccess}
            buyer={buyer}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
