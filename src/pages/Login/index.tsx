import { useEffect, useState } from "react";
import {
  CssBaseline,
  TextField,
  Link,
  Box,
  Container,
  Typography,
} from "@mui/material";
import logoVinova from "../../assets/images/vinovaLogo.png";
import "./style.css";
import { Controller, useForm } from "react-hook-form";
import { axiosInstance, setToken } from "../../services/config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const Login = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    let datas: string = localStorage.getItem("auth") + "";
    setToken(datas);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      Navigate("/home");
    }
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  const login = (data: any) => {
    let params = {
      username: data.username,
      password: data.password,
    };

    axiosInstance
      .post("/api/keycloak/login", params)
      .then(function (response) {
        //   IF USER ALREADY EXISTS
        if (response.data?.success === false) {
          setLoading(true);
        } else {
          setLoading(true);
          localStorage.setItem("auth", response.data.result.accessToken);
          setToken(response.data.result.accessToken);
          window.location.reload();
          setTimeout(() => {
            Navigate("/home");
          }, 3000);
          setError(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Username or password incorrect");
        setError(true);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={logoVinova} alt="logoVinova" />
      <CssBaseline />
      <form autoComplete="off" onSubmit={handleSubmit(login)}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "25px",
          }}
        >
          <Typography component="h1" variant="h6">
            Sign in to your account
          </Typography>
          <div className="mb-3 mt-4">
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  error={!!errors?.username}
                  helperText={errors?.username ? errors.username.message : null}
                />
              )}
            />
          </div>
          <div className="mb-3">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  type="password"
                  id="password"
                  label="password"
                  name="password"
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                />
              )}
            />
          </div>
          <Link href="#" variant="body2" sx={{ float: "right" }}>
            Forgot password?
          </Link>
          <LoadingButton
            startIcon={<></>}
            loading={loading}
            loadingPosition="start"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#E21A22" }}
          >
            Sign In
          </LoadingButton>
          {error && (
            <Typography>
              <ErrorOutlineIcon />
              Username or password incorrect
            </Typography>
          )}
        </Box>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        limit={2}
        transition={Flip}
      />
    </Container>
  );
};

export default Login;
