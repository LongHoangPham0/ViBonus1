import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import LogoAdmin from "../../assets/images/LogoAdmin.png";
import "./stype.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "#ffffff" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none", color: "#000000" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              marginLeft: "21px",
              fontWeight: "700",
              lineHeight: "100%",
            }}
          >
            ViAdmin
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "45px", height: "45px", margin: "10px" }}
            src={LogoAdmin}
          />
          <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
            Ron Dam
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <NavLink
              to="/admin/account"
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <svg
                    width={22}
                    height={18}
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                      fill="#C3C7CF"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={"User"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="/admin/items"
              className={({ isActive }) =>
                isActive ? "link-active navLink" : "navLink"
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 6.00004H14.65C14.8782 5.5328 14.9979 5.02002 15 4.50004C15.003 3.80336 14.7975 3.12173 14.4098 2.54287C14.0221 1.96401 13.4701 1.51442 12.8247 1.25198C12.1794 0.989531 11.4703 0.92624 10.7886 1.07025C10.107 1.21426 9.48405 1.55898 9 2.06004C8.51595 1.55898 7.89302 1.21426 7.21138 1.07025C6.52975 0.92624 5.82061 0.989531 5.17525 1.25198C4.5299 1.51442 3.97786 1.96401 3.59019 2.54287C3.20252 3.12173 2.99697 3.80336 3 4.50004C3.00213 5.02002 3.12178 5.5328 3.35 6.00004H3C2.20435 6.00004 1.44129 6.31611 0.87868 6.87872C0.316071 7.44133 0 8.20439 0 9.00004V11C0 11.2653 0.105357 11.5196 0.292893 11.7071C0.48043 11.8947 0.734784 12 1 12H2V18C2 18.7957 2.31607 19.5588 2.87868 20.1214C3.44129 20.684 4.20435 21 5 21H13C13.7956 21 14.5587 20.684 15.1213 20.1214C15.6839 19.5588 16 18.7957 16 18V12H17C17.2652 12 17.5196 11.8947 17.7071 11.7071C17.8946 11.5196 18 11.2653 18 11V9.00004C18 8.20439 17.6839 7.44133 17.1213 6.87872C16.5587 6.31611 15.7956 6.00004 15 6.00004ZM8 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2653 4 18V12H8V19ZM8 10H2V9.00004C2 8.73482 2.10536 8.48047 2.29289 8.29293C2.48043 8.10539 2.73478 8.00004 3 8.00004H8V10ZM8 6.00004H6.5C6.20333 6.00004 5.91332 5.91206 5.66665 5.74724C5.41997 5.58242 5.22771 5.34815 5.11418 5.07406C5.00065 4.79997 4.97094 4.49837 5.02882 4.2074C5.0867 3.91643 5.22956 3.64916 5.43934 3.43938C5.64912 3.2296 5.91639 3.08674 6.20736 3.02886C6.49834 2.97098 6.79994 3.00069 7.07403 3.11422C7.34811 3.22775 7.58238 3.42001 7.7472 3.66668C7.91203 3.91336 8 4.20337 8 4.50004V6.00004ZM10 4.50004C10 4.20337 10.088 3.91336 10.2528 3.66668C10.4176 3.42001 10.6519 3.22775 10.926 3.11422C11.2001 3.00069 11.5017 2.97098 11.7926 3.02886C12.0836 3.08674 12.3509 3.2296 12.5607 3.43938C12.7704 3.64916 12.9133 3.91643 12.9712 4.2074C13.0291 4.49837 12.9994 4.79997 12.8858 5.07406C12.7723 5.34815 12.58 5.58242 12.3334 5.74724C12.0867 5.91206 11.7967 6.00004 11.5 6.00004H10V4.50004ZM14 18C14 18.2653 13.8946 18.5196 13.7071 18.7071C13.5196 18.8947 13.2652 19 13 19H10V12H14V18ZM16 10H10V8.00004H15C15.2652 8.00004 15.5196 8.10539 15.7071 8.29293C15.8946 8.48047 16 8.73482 16 9.00004V10Z"
                      fill="#C3C7CF"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={"Items"} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
