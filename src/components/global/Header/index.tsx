import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import logoVinova from "../../../assets/images/vinovaLogo.png";
import userVinova from "../../../assets/images/userAvatr.png";
import editProfileIcon from "../../../assets/images/editProfile.png";
import docIcon from "../../../assets/images/docProfile.png";
import logoutIcon from "../../../assets/images/Logout.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  Container,
  InputAdornment,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GET_POST_CATEGORY_LIST_REQUEST } from "../../../redux/reducer/postCategoryReducer/actionTypes";
import { GET_USER_ID_LIST_REQUEST } from "../../../redux/reducer/userIDReducer/actionTypes";
import { GET_USER_LIST_REQUEST } from "../../../redux/reducer/userReducer/actionTypes";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { GET_POST_LIST_REQUEST } from "../../../redux/reducer/postReducer/actionTypes";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
export default function Header() {
  //STATE
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const Navigate = useNavigate();

  //HOOK
  const dispatch = useAppDispatch();
  const { postCategories } = useAppSelector(
    (state) => state.postCategoryReducer
  );

  const usersId = useAppSelector((state) => state.userIDReducer);
  const { posts } = useAppSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch({
      type: GET_POST_CATEGORY_LIST_REQUEST,
    });
    dispatch({
      type: GET_POST_LIST_REQUEST,
    });
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, []);

  //Bien
  const openUser = Boolean(anchorElUser);

  //function
  const handleClickUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const handleChangePost = (event: SelectChangeEvent) => {
    setPost(event.target.value);
  };

  const logout = () => {
    Navigate("/");
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    dispatch({
      type: GET_USER_LIST_REQUEST,
    });
  }, [dispatch]);
  return (
    <div>
      <AppBar
        // position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <NavLink to="/home">
              <img src={logoVinova} alt="logoVinova" />
            </NavLink>

            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={
                  posts?.data.map((post: any, index: number) => post.title) || [
                    "",
                  ]
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      outline: "none",
                      backgroundColor: "#F4F4F4",
                      borderRadius: "14px",
                      width: "100%",
                      maxWidth: "355px",
                      marginLeft: "14px",
                      paddingLeft: "14px",
                      "& > input": {
                        padding: "12px 0px",
                      },
                    }}
                    variant="standard"
                  />
                )}
              />
            </Stack>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value="">All categories</MenuItem>
                {postCategories?.data.map((category: any, index: number) => (
                  <MenuItem key={index} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={post}
                onChange={handleChangePost}
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value="">All Post</MenuItem>
                {posts?.data.map((post: any, index: number) => (
                  <MenuItem key={index} value={post.id}>
                    {post.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              id="basic-button"
              aria-controls={openUser ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openUser ? "true" : undefined}
              onClick={handleClickUser}
              endIcon={<KeyboardArrowDownIcon />}
              startIcon={<Avatar src={usersId.usersId?.avatar}></Avatar>}
              sx={{
                textTransform: "capitalize",
                color: "black",
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      size: "16px",
                      color: "#333333",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    {usersId.usersId?.firstName}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ size: "14px", color: "#828282", fontWeight: "400" }}
                  >
                    {usersId.usersId?.email}
                  </Typography>
                }
              />
            </Button>

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
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          size: "16px",
                          color: "#333333",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {usersId.usersId?.firstName}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          size: "14px",
                          color: "#828282",
                          fontWeight: "400",
                        }}
                      >
                        {usersId.usersId?.email}
                      </Typography>
                    }
                  />
                </MenuItem>
              </NavLink>
              <hr />
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
