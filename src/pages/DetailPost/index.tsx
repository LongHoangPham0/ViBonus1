import { useEffect, useState } from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import { Stack, Avatar, Typography, Box, Paper, Grid } from "@mui/material";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GET_POST_ID_REQUEST } from "../../redux/reducer/postReducer/actionTypes";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

const StyledPost = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  borderTop: "white",
}));

const DetailPost = () => {
  const [visible, setVisible] = useState(false);

  let { id } = useParams();

  const dispatch = useAppDispatch();
  const { post } = useAppSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch({
      type: GET_POST_ID_REQUEST,
      payload: id,
    });
  }, [dispatch]);

  return (
    <div>
      {post ? (
        <div>
          <StyledPaper>
            <StyledPost>
              <Box>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar src={post?.author.avatar}></Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        {post?.author.userName}
                        <span>{post?.approveDateTime}</span>
                      </Typography>
                    </Typography>
                  </Grid>
                  <div className="textCategory">
                    <Typography noWrap>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        {post?.category.name}
                      </Typography>
                    </Typography>
                  </div>
                </Grid>
                <div
                  style={{ marginTop: 20, marginBottom: 5 }}
                  className="textTitle"
                >
                  {post?.title}
                </div>
                <div style={{ marginBottom: 20 }} className="textTags">
                  {post?.hashTags}
                </div>
              </Box>
            </StyledPost>
            <StyledPaper>
              <div>
                {post?.thumbnail && (
                  <img
                    src={post?.thumbnail}
                    className="postImg"
                    alt={post?.thumbnail}
                  />
                )}
              </div>
              <div className="desc">
                <span className="postText">
                  <div className="descTitle">{post?.content}</div>
                </span>
              </div>
              <hr />
              <StyledPost>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <div className="postLikeCounter">
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                        }}
                        spacing={{
                          xs: 1,
                          sm: 2,
                          md: 0,
                        }}
                        sx={{ cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#D90429"
                          className="bi bi-heart icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </Stack>
                      {post?.totalLikes}
                    </div>
                    <div
                      className="postCommentText"
                      onClick={() => setVisible(true)}
                    >
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                        }}
                        spacing={{
                          xs: 1,
                          sm: 2,
                          md: 0,
                        }}
                        sx={{ cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chat-square icon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        </svg>
                      </Stack>
                      {post?.totalComments}
                    </div>
                  </div>
                  <div
                    className="postBottomRight"
                    style={{ marginRight: "45px" }}
                  >
                    <RemoveRedEyeIcon
                      sx={{
                        color: "#818C99",
                        marginRight: "5px",
                      }}
                    />
                    {post?.totalViews}
                  </div>
                </div>
              </StyledPost>
            </StyledPaper>
            {/* {visible && (
          <div>
            {post.comments.map((cmt, index) => (
              <div className="labelContainer" key={index}>
                <div className="labelAvatr">
                  <Avatar src={cmt.avatr}></Avatar>
                </div>
                <div className="labelUserName">{cmt.userName}</div>
                <div className="labelDate">{cmt.date}</div>
                <div className="labelComment">
                  <h1>{cmt.comment}</h1>
                </div>
              </div>
            ))}
          </div>
        )} */}
          </StyledPaper>
        </div>
      ) : (
        <h1 className="postError">The post's information could not be found</h1>
      )}
    </div>
  );
};

export default DetailPost;
