import React from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Menu from "../components/global/Menu";
import Header from "../components/global/Header";
import Topproducts from "../components/global/List/Topproducts";
import HeaderResponsive from "../components/global/HeaderResponsive";
import BottomMenu from "../components/global/BottomMenu";
import MyPoints from "../components/global/MyPoints";

export default function RedeemTemplate() {
  return (
    <div>
      <div className="ResponsivePCtoMobile">
        <Header />
      </div>
      <div className="ResponsiveMobiletoPC">
        <HeaderResponsive />
        <BottomMenu />
      </div>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "70px" }}>
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
                <Topproducts />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
