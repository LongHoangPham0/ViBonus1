import React, { useEffect } from "react";
import {
  Stack,
  Avatar,
  Button,
  FormControl,
  TextField,
  Input,
  Checkbox,
  InputAdornment,
  Paper,
  Container,
  IconButton,
  styled,
  FormControlLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import "./styleedit.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GET_USER_ID_LIST_REQUEST } from "../../redux/reducer/userIDReducer/actionTypes";
import { Controller, useForm } from "react-hook-form";

interface State {
  amount: string;
  password: string;
  confirmPassword: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}
export default function Edit() {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    confirmPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      amount: "",
      bio: "",
      password: "",
      confirmPassword: "",
      weight: "",
      weightRange: "",
      showPassword: false,
      showConfirmPassword: false,
    },
  });

  const dispatch = useAppDispatch();
  const usersId = useAppSelector((state) => state.userIDReducer);
  const Inputs = styled("input")({
    display: "none",
  });

  useEffect(() => {
    reset({
      amount: usersId.usersId?.userName,
      bio: usersId.usersId?.bio,
      password: "",
      confirmPassword: "",
    });
  }, []);

  useEffect(() => {
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, [dispatch]);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 5 }}>
      <Stack alignItems="center" spacing={3}>
        <div className="imgEdit">
          <Avatar
            alt="avatar"
            src={usersId.usersId?.avatar}
            sx={{
              width: 180,
              height: 180,
              border: "1px solid",
              marginBottom: "60px",
            }}
          />
          <label className="btnEditAva" htmlFor="contained-button-file">
            <Inputs accept="image/*" id="contained-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <BorderColorOutlinedIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </label>
        </div>
        <Paper sx={{ borderRadius: 3, padding: 1 }}>
          <Controller
            name="bio"
            control={control}
            rules={{
              required: "Bio is required",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                placeholder="Edit your bio"
                sx={{ textAlign: "center", width: { xs: "30ch", sm: "50ch" } }}
                inputProps={{ style: { textAlign: "center" } }}
                multiline
                minRows={4}
              />
            )}
          />
        </Paper>
        <Paper sx={{ borderRadius: 3, padding: 1 }}>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Username is required",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: { xs: "30ch", sm: "50ch" } }}
                fullWidth
                variant="standard"
                placeholder="Username"
                error={!!errors?.amount}
                helperText={errors?.amount ? errors.amount.message : null}
              />
            )}
          />
        </Paper>
        <Paper sx={{ borderRadius: 3, padding: 1 }}>
          <FormControl
            sx={{ width: { xs: "30ch", sm: "50ch" } }}
            variant="standard"
          >
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Paper>
        <Paper sx={{ borderRadius: 3, padding: 1 }}>
          <FormControl
            sx={{ width: { xs: "30ch", sm: "50ch" } }}
            variant="standard"
          >
            <Input
              id="standard-adornment-password"
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                  >
                    {values.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Paper>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#E21A22",
                  "&.Mui-checked": {
                    color: "#E21A22",
                  },
                }}
                defaultChecked
              />
            }
            label="Confirm password when give points"
          />
        </Stack>
        <Button
          sx={{ padding: "10px 40px", borderRadius: "15px" }}
          variant="contained"
          color="error"
        >
          Save
        </Button>
      </Stack>
    </Container>
  );
}
