import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    products: [],
    drawer: false,
    totalAmount: 0

}





export const basketSlice = createSlice(
    {
        name: "basket",
        initialState,
        reducers: {
            addToBasket: (state, action) => {
                const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
                if (findProduct) {
                    //evvelceden olub
                    const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                    findProduct.count += action.payload.count;
                    state.products = [...extractedProducts, findProduct];

                } else {
                    state.products = [...state.products, action.payload];

                }
            },

            setDrawer: (state) => {
                state.drawer = !state.drawer
            },
            calculateBasket: (state) => {
                state.totalAmount = 0;
                state.products && state.products.map((product) => {
                    state.totalAmount += product.price * product.count;
                }
                )
            },

            deleteFromBadge: (state, action) => {
                state.products = state.products.filter(remove => remove.id !== action.payload)
            },

        }
    }
)

export const { addToBasket, setDrawer, calculateBasket, deleteFromBadge } = basketSlice.actions
export default basketSlice.reducer