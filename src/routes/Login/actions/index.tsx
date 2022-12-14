import { createAsyncThunk } from "@reduxjs/toolkit"

const user = {
username: "Quanchuan",
  password: "123456789@A"
}

const loginVerify = createAsyncThunk(
  "login/verify",
  async (formdata: typeof user) => {
    //fake login api
    const promise: Promise<string> = new Promise((resolve, reject) => {
      if(formdata.username === "Quanchuan" && formdata.password === "123456789@A") {
        setTimeout(()=> {resolve("Success")}, 1000)
      } else {
        setTimeout(()=> {reject("Fail")}, 1000)
      }
    })
    return await promise
  }
)

export {loginVerify}