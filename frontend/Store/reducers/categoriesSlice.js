import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_URI } from "../../db_data";

export const categoryReducer = createSlice({
  name: "categories",
  initialState: {
    data: [],
    last_loaded: "false",
    status: "idle",
  },
  reducers: {
    add_category(state, action) {
      state.data.concat(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetch_categories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetch_categories.fulfilled, (state, action) => {
        state.status = "finished";
        state.data = action.payload.data;
        state.last_loaded = action.payload.last_loaded;
      })
      .addCase(fetch_categories.rejected, (state, action) => {
        state.status = "error";
        console.log("fetch_categories", action.error.message);
      });
  },
});

export const fetch_categories = createAsyncThunk(
  "categories/fetchcategories",
  async () => {
    const response = await axios(LOGIN_URI + "categories");
    const datetime = new Date();
    console.log(
      `fetch_categories: ${datetime.getHours()}:${datetime.getMinutes()}`
    );
    return {
      data: response.data,
      last_loaded: `${datetime.getHours()}:${datetime.getMinutes()}`,
    };
  }
);
export default categoryReducer.reducer;
export const {} = categoryReducer.actions;
