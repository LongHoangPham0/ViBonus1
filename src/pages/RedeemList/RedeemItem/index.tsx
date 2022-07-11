import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Dialog,
  DialogActions,
  Button,
  Slide,
  TextField,
  ButtonProps,
  styled,
  Grid,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { Add, HorizontalRule } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { RedeemInfo } from "../../../model/redeeem";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toast } from "react-toastify";
import { PUT_REWARD_REQUEST } from "../../../redux/reducer/rewardReducer/actionTypes";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//css button
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[400],
    transition: "all 0.5s",
  },
}));

interface Props {
  item: RedeemInfo;
  usersId: any;
}
export const RedeemItem = ({ item }: Props) => {
  const handleSubmit = () => {
    const data = { rewardId: item.id, quantity: counter };
    dispatch({ type: PUT_REWARD_REQUEST, payload: data });
    toast.success("You have redeem " + counter + " " + item.name + "!");
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const dispatch = useAppDispatch();

  const usersId = useAppSelector((state) => state.userIDReducer);
  //Btn close
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //counter
  const [counter, setCounter] = useState<number>(1);
  useEffect(() => {
    if (counter > 1 && item.price * counter > usersId.usersId?.redeemPoint) {
      toast.warning("Not enough point to redeem!");
    }
  }, [counter]);
  useEffect(() => {
    if (
      counter >= 1 &&
      open === true &&
      item.price * counter > usersId.usersId?.redeemPoint
    ) {
      toast.warning("You don't have enough points to redeem!");
    }
  }, [open]);

  const increase = () => {
    if (counter < item.quantity) {
      setCounter((count) => count + 1);
    } else {
      setCounter(item.quantity);
      toast.error("Over quantity limit!!!");
    }
  };
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          borderRadius: "15px",
          position: "relative",
          marginTop: "26px",
        }}
        className="redeemItem"
      >
        <CardMedia
          component="img"
          alt="picture"
          height="227px"
          image={item.image}
        />
        <Grid container>
          <Grid item xs={9}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="titleItem"
                sx={{
                  typography: { md: "h6", sm: "body1" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: "bold !important",
                }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.quantity === 0 ? "Out of Stock" : item.price + " point"}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={3}>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <IconButton
                sx={{ color: "#E21A22" }}
                aria-label="add an item"
                onClick={handleClickOpen}
                disabled={item.quantity === 0 ? true : false}
              >
                <AddBoxIcon sx={{ fontSize: "40px" }} />
              </IconButton>

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                  sx: {
                    minWidth: { xs: "250px", md: "700px" },
                    height: { xs: "auto", md: "366px" },
                    borderRadius: "35px",
                  },
                }}
              >
                <Grid container sx={{ overflow: "hidden" }}>
                  <Grid item xs={12} md={4}>
                    <div className="productDetailLeft">
                      <img src={item.image} alt="picture1" />
                    </div>
                  </Grid>
                  <Grid
                    item
                    sx={{ padding: { xs: 2, sm: 3, md: 5 } }}
                    xs={12}
                    md={8}
                  >
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        right: 20,
                        top: 20,
                        color: (theme) => theme.palette.grey[500],
                        backgroundColor: "white",
                      }}
                    >
                      <CloseIcon style={{ marginRight: 0 }} />
                    </IconButton>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "16px",
                        opacity: 0.5,
                      }}
                    >
                      You have: {usersId.usersId?.redeemPoint} pts
                    </Typography>
                    <div className="productDetailDescriptionTitle">
                      <Typography
                        noWrap
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "18px", sm: "24px" },
                          marginTop: 1,
                        }}
                        title={item.name}
                      >
                        {item.name}
                      </Typography>
                    </div>
                    <div className="productDetailDescriptionContent">
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          color: " #333333",
                          marginTop: 1,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </div>
                    <Stack
                      justifyContent="space-between"
                      alignItems={{ xs: "center", sm: "flex-end" }}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >
                      <div className="counterItem">
                        <Button
                          className="controlBtn"
                          sx={{
                            border: "1px solid #D9D9D9",
                            borderRadius: "15px 0px 0px 15px",
                            color: "black",
                          }}
                          onClick={decrease}
                        >
                          <HorizontalRule />
                        </Button>

                        <TextField
                          className="numberCounter"
                          value={counter}
                          //onChange={(e) => setCounter(parseInt(e.target.value))}
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                          sx={{
                            width: "70px",
                          }}
                        />

                        <Button
                          className="controlBtn"
                          sx={{
                            border: "1px solid #D9D9D9",
                            borderRadius: "0px 15px 15px 0px",
                            color: "black",
                          }}
                          disabled={
                            item.price * counter > usersId.usersId?.redeemPoint
                              ? true
                              : false
                          }
                          onClick={increase}
                        >
                          <Add />
                        </Button>
                      </div>
                      <DialogActions
                        sx={{
                          display: "grid",
                          textAlign: "center",
                          padding: "0",
                        }}
                      >
                        <>
                          <span className="spanOpacity">
                            Total Cost: {item.price * counter}
                          </span>
                          <ColorButton
                            variant="contained"
                            sx={{
                              background: "#E21A22",
                              borderRadius: "15px",
                              width: "150px",
                              height: "47px",
                              marginTop: "13px",
                              textTransform: "capitalize",
                            }}
                            disabled={
                              item.price * counter >
                              usersId.usersId?.redeemPoint
                                ? true
                                : false
                            }
                            onClick={handleSubmit}
                          >
                            Redeem
                          </ColorButton>
                        </>
                      </DialogActions>
                    </Stack>
                  </Grid>
                </Grid>
              </Dialog>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
