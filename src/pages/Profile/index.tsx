import { Box, Container, Grid } from "@mui/material";
import BottomMenu from "../../components/global/BottomMenu";
import Header from "../../components/global/Header";
import HeaderResponsive from "../../components/global/HeaderResponsive";
import List from "../../components/global/List";
import Menu from "../../components/global/Menu";
import UserCard from "../../components/global/UserCard/UserCard";
import Home from "../Home";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GET_USER_ID_LIST_REQUEST } from "../../redux/reducer/userIDReducer/actionTypes";
import { useEffect } from "react";

export default function Profile() {
  const usersId = useAppSelector((state) => state.userIDReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, [dispatch]);

  return (
    <div className="profile">
      <div className="ResponsivePCtoMobile">
        <Header />
      </div>
      <div className="ResponsiveMobiletoPC">
        <HeaderResponsive />
        <BottomMenu />
      </div>
      <UserCard usersId={usersId} />
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <div className="ResponsivePCtoMobile">
            <Grid container spacing={2}>
              <Grid item sm={0} lg={2}>
                <Menu />
              </Grid>

              <Grid item sm={12} lg={8}>
                <div className="content">
                  <Container>
                    <Home type="string" />
                  </Container>
                </div>
              </Grid>

              <Grid item sm={0} lg={2}>
                <List />
              </Grid>
            </Grid>
          </div>
          <div className="ResponsiveMobiletoPC">
            <div className="content">
              <Container>
                <Home type="string" />
              </Container>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
