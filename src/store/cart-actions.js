import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("api url...");

      if (!response.ok) {
        throw new Error("sending cart data failed!");
      }

      const data = await response.json();

      return data;
    };

    try {
        await fetchData();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sent cart data failed",
          })
        );
      }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending..",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("api url...", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed",
        })
      );
    }
  };
};
