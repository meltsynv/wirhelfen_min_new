import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_URI } from "../../db_data";


export const cardReducer = createSlice({
    name: 'cards',
    initialState: {
        data: [],
        last_loaded: 'false',
        status: 'idle'
    },
    reducers: {

        add_card: (state, action) => {
            state.data = [...state.data, action.payload];
        },

        remove_card: (state, action) => {
            state.data.filter(card => card.id != action.payload.id);
        },

        set_card_loading_status (state,action) {
            state.status = action.payload;
        },
        

    },
    extraReducers(builder){
        builder.addCase(fetch_cards.pending,(state, action) => {state.status = 'loading';})
               .addCase(fetch_cards.fulfilled, (state, action) => {state.status = 'finished';
                                                                   state.data =  action.payload.data;
                                                                   state.last_loaded= action.payload.last_loaded; })
               .addCase(fetch_cards.rejected, (state, action) => {state.status = 'error';
                                                                        console.log('fetch_crds', action.error.message); });
    },
})

export const fetch_cards = createAsyncThunk('cards/fetchcards', async () => {
    const response = await axios(LOGIN_URI + 'cards');
    const datetime = new Date()
    console.log(`fetch_cards: ${datetime.getHours()}:${datetime.getMinutes()} `)
    return {
        data: response.data,
        last_loaded: `${datetime.getHours()}:${datetime.getMinutes()}`,
    }
})
export default cardReducer.reducer;
export const {add_card, remove_card, set_card_loading_status} = cardReducer.actions;