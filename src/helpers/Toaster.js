import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toaster = () => {
  const productReducer = useSelector((state) => state.products);
  const { alertType, alertMessage, showAlert } = productReducer;
  return (
    <div>
      {alertType === "success"
        ? toast.success(alertMessage, {
            toastId: " ",
          })
        : alertType === "error"
        ? toast.error(alertMessage, {
            toastId: " ",
          })
        : alertType === "warning"
        ? toast.warn(alertMessage, {
            toastId: " ",
          })
        : alertType === "warning" &&
          toast.info(alertMessage, {
            toastId: " ",
          })}

      {showAlert && (
        <ToastContainer
          position="top-center"
          autoClose={3000}
          pauseOnFocusLoss={false}
        />
      )}
    </div>
  );
};

export default Toaster;
