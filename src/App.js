import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "sending..",
    //       message: "Sending cart data",
    //     })
    //   );
    //   const response = await fetch("api url...", {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   });

    //   if (!response.ok) {
    //     throw new Error("sending cart data failed!");
    //   }

    //   const responseData = await response.json();

    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sent cart data",
    //     })
    //   );
    // };

    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sent cart data failed",
    //     })
    //   );
    // });

    dispatch(sendCartData(cart)); //in this way we have api calls using action creators (thunk).
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
