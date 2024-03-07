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
    setUser: (state, action) => {
      const { userName, firstName, lastName } = action.payload
      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
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

export const { setUser, setUserEmail, tokenReceived, logout } =
  userSlice.actions

export default userSlice.reducer
