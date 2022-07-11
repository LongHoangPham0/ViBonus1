import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

import logoVinova from "../../../assets/images/vinovaLogo.png";
import userVinova from "../../../assets/images/userAvatr.png";
import editProfileIcon from "../../../assets/images/editProfile.png";
import docIcon from "../../../assets/images/docProfile.png";
import logoutIcon from "../../../assets/images/Logout.png";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GET_USER_ID_LIST_REQUEST } from "../../../redux/reducer/userIDReducer/actionTypes";

const HeaderResponsive = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usersId = useAppSelector((state) => state.userIDReducer);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const openUser = Boolean(anchorElUser);
  const handleClickUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  useEffect(() => {
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, []);

  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div style={{ position: "fixed", zIndex: 10 }}>
      <AppBar
        sx={{
          backgroundColor: "#F4F4F4",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/home">
            <img className="logoVinova" src={logoVinova} alt="logoVinova" />
          </NavLink>
          <div>
            <Button
              startIcon={
                <SearchIcon
                  sx={{
                    backgroundColor: "white",
                    color: "#9D9D9D",
                    borderRadius: 10,
                    padding: 1,
                  }}
                />
              }
            />

            <Button
              id="basic-button"
              aria-controls={openUser ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openUser ? "true" : undefined}
              onClick={handleClickUser}
              startIcon={
                <Avatar
                  sx={{
                    border: "1px solid black",
                    height: "30px",
                    width: "30px",
                  }}
                  src={usersId.usersId?.avatar}
                ></Avatar>
              }
            ></Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElUser}
              open={openUser}
              onClose={handleCloseUser}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLink to="/profile">
                <MenuItem>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    {usersId.usersId?.firstName}
                    <span> {usersId.usersId?.email}</span>
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/editprofile">
                <MenuItem onClick={handleCloseUser}>
                  <ListItemIcon>
                    <img src={editProfileIcon} alt="" />
                  </ListItemIcon>
                  <ListItemText>Edit Profile</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink to="/document">
                <MenuItem onClick={handleCloseUser}>
                  <ListItemIcon>
                    <img src={docIcon} alt="" />
                  </ListItemIcon>
                  <ListItemText>Documents</ListItemText>
                </MenuItem>
              </NavLink>
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <img src={logoutIcon} alt="" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderResponsive;
