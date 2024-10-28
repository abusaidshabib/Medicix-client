import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const initialState = {
  email: "",
  isLoading: true,
  isError: false,
  error: "",
  navigate: false,
  user: {},
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

export const googlePopUp = createAsyncThunk(
  "auth/googlePopUp",
  async() => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);

    return data.user.email;
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
    },
    setUser: (state, {payload}) => {
      state.user = payload;
      state.email = payload.email;
      state.isLoading = false;

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.isError = false;
        state.error = "";
        state.navigate = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.isError = false;
        state.error = "";
        state.navigate = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(googlePopUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googlePopUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload;
        state.isError = false;
        state.error = "";
        state.navigate = true;
      })
      .addCase(googlePopUp.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
