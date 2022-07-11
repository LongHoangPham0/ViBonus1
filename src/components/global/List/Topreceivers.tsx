import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./css/styles.css";
import { GET_TOP_RECEIVER_REQUEST } from "../../../redux/reducer/topreceiverReducer/actionTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Typography } from "@mui/material";

export default function Topreceivers() {
  const { receivers } = useAppSelector((state) => state.topReceiverReducer);
  const dispatch = useAppDispatch();
  let pointUSLocale = Intl.NumberFormat("en-US");

  useEffect(() => {
    dispatch({
      type: GET_TOP_RECEIVER_REQUEST,
    });
  }, [dispatch]);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {receivers?.data.map((item: any, index: number) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar sx={{ borderRadius: 50 }} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ size: "16px", color: "#333333", fontWeight: "bold" }}
                >
                  {item.userName.charAt(0).toUpperCase() +
                    item.userName.slice(1)}
                </Typography>
              }
              secondary={
                <Typography
                  sx={{ size: "14px", color: "#828282", fontWeight: "400" }}
                >
                  {pointUSLocale.format(item.totalPointReceived) + ` points`}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
