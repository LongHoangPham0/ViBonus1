import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import HeaderResponsive from "../components/global/HeaderResponsive";
import BottomMenu from "../components/global/BottomMenu";

export default function NormalTemplate() {
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
          <Grid container spacing={2}>
            <Grid item xs={0} lg={2}></Grid>

            <Grid item xs={12} lg={8}>
              <div className="content">
                <Container maxWidth="md">
                  <Outlet />
                </Container>
              </div>
            </Grid>

            <Grid item xs={0} lg={2}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
