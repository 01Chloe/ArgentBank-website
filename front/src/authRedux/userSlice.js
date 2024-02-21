import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
    userEmail: null,
    token: null,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
    tokenReceived: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = null
      state.userName = null
      state.firstName = null
      state.lastName = null
    },
  },
})

export const {
  setUserName,
  setFirstName,
  setLastName,
  setUserEmail,
  tokenReceived,
  logout,
} = userSlice.actions

export default userSlice.reducer