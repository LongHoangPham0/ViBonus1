import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import List from "../components/global/List";
import Menu from "../components/global/Menu";
import Header from "../components/global/Header";
import HeaderResponsive from "../components/global/HeaderResponsive";
import BottomMenu from "../components/global/BottomMenu";
import MyPoints from "../components/global/MyPoints";

export default function HomeTemplate() {
  return (
    <>
      <div className="ResponsivePCtoMobile">
        <Header />
      </div>
      <div className="ResponsiveMobiletoPC">
        <HeaderResponsive />
        <BottomMenu />
      </div>

      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "70px" }}>
          <Container maxWidth="xl">
            <div className="ResponsiveMobiletoPC">
              <MyPoints />
            </div>
          </Container>
          <Grid container spacing={2}>
            <Grid item xs={0} lg={2}>
              <div className="ResponsivePCtoMobile">
                <Menu />
              </div>
            </Grid>
            <Grid item xs={12} lg={8}>
              <div className="content">
                <Container maxWidth="xl">
                  <Outlet />
                </Container>
              </div>
            </Grid>

            <Grid item xs={0} lg={2}>
              <div className="ResponsivePCtoMobile">
                <List />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
