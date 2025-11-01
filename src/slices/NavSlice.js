import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: "navbar",
    initialState: {
        product: [],
        detailsbarShow: false,
        filtershow: false,
        shownav: false,
    },
    reducers: {
        resproduct: (state, action) => {
            state.product = action.payload
        },
        setdetailsbar: (state, action) => {
            state.detailsbarShow = action.payload
        },
        setfiltershow: (state, action) => {
            state.filtershow = action.payload
        },
        setShownav: (state, action) => {
            state.shownav = action.payload
        }

    }
})

export const navReducer = NavSlice.reducer;
export const { setdetailsbar, setprofileshow, setfiltershow, setShownav,resproduct} = NavSlice.actions;