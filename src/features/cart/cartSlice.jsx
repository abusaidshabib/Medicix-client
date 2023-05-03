import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  invoice: localStorage.getItem("invoice")
    ? JSON.parse(localStorage.getItem("invoice"))
    : [],
  subTotal: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createInvoice: (state, action) => {
      const newData = state.cart.map((product) => {
        return { ...product };
      });
      let amount = 0;
      let total = 0;
      newData.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      })

      const temp = action.payload;


      const invoiceObj = {
        date: temp.date,
        name: temp.name,
        address: temp.address,
        email: temp.email,
        phone: temp.phone,
        subTotal: total,
        discount: temp.discount,
        total: total - parseInt(temp.discount),
        products: newData,
      };
      localStorage.setItem("invoice", JSON.stringify(invoiceObj));
    },

    changeQuantity: (state, action) => {
      action.payload.totalProducts < action.payload.quantity
        ? (action.payload["quantity"] = action.payload.totalProducts)
        : (action.payload["quantity"] = parseInt(
            Math.abs(action.payload.quantity)
          ));

      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity = action?.payload?.quantity;
      } else {
        state.cart.push(action.payload);
      }

      const newData = state.cart.map((product) => {
        return {
          ...product,
          subTotal: product.price * product.quantity,
        };
      });

      localStorage.setItem("cart", JSON.stringify(newData));
    },
    removeFromCart(state, action) {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { changeQuantity, createInvoice, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
