import React, { useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import Link from "next/link";
import { _login_customer } from "../DAL/register";
import { useSnackbar } from "notistack";
import { useContentContext } from "../Hooks/ContentContext";
import { useRouter } from "next/router";

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const { handleUserInfo } = useContentContext();
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let postData = {
      password: inputs.password,
      email: inputs.email,
      device_token: "12345",
      platform: "web",
      user_type: "passenger",
    };

    const result = await _login_customer(postData);
    if (result.code === 200) {
      handleUserInfo(result.user);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_info", JSON.stringify(result.user));
      enqueueSnackbar(result.message, { variant: "success" });
      router.push("/flights");
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12">
              <h4 className="text-center">Login</h4>
            </div>
            <div className="col-12 col-md-10 mx-auto">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 col-md-12 mt-3">
                  <label className="mb-1">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    autoComplete="off"
                    required
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-12 mt-3">
                  <label className="mb-1">
                    Password <span>*</span>
                  </label>
                  <input
                    type="Password"
                    name="password"
                    placeholder="Password *"
                    autoComplete="off"
                    required
                    value={inputs.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-12 mt-3">
                  <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                    checked
                  />
                </div>
                <div className="col-12 col-md-12 mt-3">
                  <button className="button w-100" disabled={isloading}>
                    {isloading ? "Loading..." : "Log In"}
                  </button>
                </div>
                <div className="col-12 col-md-12 mt-3">
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
