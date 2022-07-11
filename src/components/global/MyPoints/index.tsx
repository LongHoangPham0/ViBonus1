import { Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { GET_USER_ID_LIST_REQUEST } from "../../../redux/reducer/userIDReducer/actionTypes";
const MyPoints = () => {
  let pointUSLocale = Intl.NumberFormat("en-US");
  const usersId = useAppSelector((state) => state.userIDReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, [dispatch]);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Grid
        item
        xs={6}
        sx={{ borderRight: "1px solid #E0E0E0", padding: "13px" }}
      >
        <Typography
          sx={{ textAlign: "center", color: "#666666", fontSize: "14px" }}
        >
          Points to give
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          {pointUSLocale.format(usersId.usersId?.givePoint)}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ padding: "13px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#666666", fontSize: "14px" }}
        >
          Points to redeem
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          {pointUSLocale.format(usersId.usersId?.redeemPoint)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MyPoints;
