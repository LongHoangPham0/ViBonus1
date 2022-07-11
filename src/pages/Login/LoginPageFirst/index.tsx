import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import logoVinova from "../../../assets/images/vinovaLogo.png";
import "./style.css";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[400],
    transition: "all 0.5s",
  },
}));

export const LoginPageFirst = () => {
  const navigation = useNavigate();

  function handleSubmit() {
    navigation("/", { replace: true });
  }
  return (
    <div className="loginPageFirst">
      <img src={logoVinova} alt="logoVinova" />
      <ColorButton
        variant="contained"
        sx={{
          background: "#E21A22",
          borderRadius: "10px",
          width: "250px",
          height: "47px",
          marginTop: "13px",
          textTransform: "capitalize",
        }}
        onClick={handleSubmit}
      >
        Sign in with Keycloak
      </ColorButton>
    </div>
  );
};

export default LoginPageFirst