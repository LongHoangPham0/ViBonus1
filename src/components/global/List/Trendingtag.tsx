import { useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./css/styles.css";
import { Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GET_TAG_LIST_REQUEST } from "../../../redux/reducer/tagReducer/actionTypes";

export default function Trendingtag() {
  const { tags } = useAppSelector((state) => state.tagReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: GET_TAG_LIST_REQUEST,
    });
  }, [dispatch]);
  return (
    <>
      <Typography sx={{ color: "#666666", size: "18px" }}>
        {" "}
        Trending Tags{" "}
      </Typography>

      {tags?.data.map((item: any, index: number) => {
        return (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography
                  sx={{ size: "16px", height: "18px", color: "#333333" }}
                >
                  {item.name}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </>
  );
}
