import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import "./style.css";
import { RedeemItem } from "./RedeemItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GET_REWARD_LIST_REQUEST } from "../../redux/reducer/rewardReducer/actionTypes";
import { GET_USER_ID_LIST_REQUEST } from "../../redux/reducer/userIDReducer/actionTypes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const RedeemList = () => {
  let pointUSLocale = Intl.NumberFormat("en-US");

  const { rewards } = useAppSelector((state) => state.rewardReducer);
  const usersId = useAppSelector((state) => state.userIDReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: GET_REWARD_LIST_REQUEST,
    });
    dispatch({ type: GET_USER_ID_LIST_REQUEST });
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <div className="redeemList">
        <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
          You have <b>{pointUSLocale.format(usersId.usersId?.redeemPoint)}</b>{" "}
          to redeem
        </Typography>
        <Grid container spacing={4}>
          {rewards?.data
            .filter((item: any) => item.quantity > 0)
            .map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <RedeemItem item={item} usersId={usersId} />
              </Grid>
            ))}
        </Grid>
        <hr />
        <Grid container spacing={4}>
          {rewards?.data
            .filter((item: any) => item.quantity === 0)
            .map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <RedeemItem item={item} usersId={usersId} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default RedeemList