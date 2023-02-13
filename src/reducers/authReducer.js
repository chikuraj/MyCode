import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
        addUser(state, action) {},
        removeUser(state, action) {},
        deleteUsers(state, action) {},
    },
})

export default authSlice.reducer;



/* OLD METHOD....

const initialState = {
    token: "",
    loading: false,
    error: ""
}

const fetch2 = async (api, body, token = "") => {
    const res = await fetch(api, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
    })
    return await res.json()
}

 export const signinUser = createAsyncThunk(
   "signinUser",
    async (body) => {
        const result = await fetch2("http://localhost:9000/v1/user/signin", body)
        return result
    }
) */