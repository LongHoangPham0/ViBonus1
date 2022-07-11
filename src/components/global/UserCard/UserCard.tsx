import {
  Divider,
  Button,
  Stack,
  Container,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import "./UserCard.css";
import Cover from "../../../assets/images/backgroundUser.png";
import { useNavigate } from "react-router-dom";
interface Props {
  usersId: any;
}
const UserCard = ({ usersId }: Props) => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("/editprofile");
  };

  const handleClickLogout = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="userCard">
      <div className="usercard_cover-photo">
        <img
          className="cover-photo"
          src={usersId.usersId?.coverImage || Cover}
          alt="coverphoto"
        />
      </div>
      <div className="userCardBottom">
        <Container maxWidth="xl">
          <Stack spacing={2}>
            <Grid container sx={{ marginBottom: 4 }}>
              <Grid item xs={12} md={3} lg={2}>
                <div className="userCardLeft">
                  <div className="boxProfile">
                    <Avatar
                      sx={{
                        width: { xs: "97px", sm: "160px", md: "180px" },
                        height: { xs: "97px", sm: "160px", md: "180px" },
                        border: "2px solid black",
                        marginBottom: 2,
                      }}
                      src={usersId.usersId?.avatar}
                      alt="avatar"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={9} lg={10}>
                <Grid
                  container
                  spacing={0}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid
                    item
                    sm={3}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      color="error"
                      sx={{
                        fontSize: { xs: "14px", sm: "9px", lg: "14px" },
                        padding: { xs: "10px" },
                        marginRight: 2,
                        borderRadius: "15px",
                        backgroundColor: "#E21A22",
                        width: "120px",
                        height: "47px",
                      }}
                      variant="contained"
                      onClick={() => {
                        handleClickEdit();
                      }}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      color="error"
                      sx={{
                        fontSize: { xs: "14px", sm: "9px", lg: "14px" },
                        padding: { xs: "10px 18px", md: "10px 13px" },
                        borderRadius: "15px",
                        backgroundColor: "#E21A22",
                        width: "120px",
                        height: "47px",
                      }}
                      variant="contained"
                      onClick={() => {
                        handleClickLogout();
                      }}
                    >
                      Log out
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Grid container justifyContent="space-evenly">
                      <Grid item xs={3}>
                        <Stack className="pointItem">
                          <div className="item1">
                            <Typography className="pointUser">174</Typography>
                            <Typography className="contentUser">
                              My approved post
                            </Typography>
                          </div>
                        </Stack>
                      </Grid>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Grid item xs={3}>
                        <Stack className="pointItem">
                          <div className="item2">
                            <Typography className="pointUser">174</Typography>
                            <Typography className="contentUser">
                              My pendding post
                            </Typography>
                          </div>
                        </Stack>
                      </Grid>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Grid item xs={3}>
                        <Stack className="pointItem">
                          <div className="item3">
                            <Typography className="pointUser">174</Typography>
                            <Typography className="contentUser">
                              Total posts
                            </Typography>
                          </div>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    typography: { xs: "h5", sm: "h4" },
                    fontWeight: "bold",
                  }}
                >
                  {usersId.usersId?.firstName + " " + usersId.usersId?.lastName}
                </Typography>
                <Typography
                  sx={{
                    typography: {
                      xs: "body2",
                      sm: "subtitle1",
                      md: "body1",
                    },
                    my: 2,
                  }}
                >
                  {usersId.usersId?.bio}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default UserCard;
