import { useState } from "react";
import { Stack, Avatar, Typography, Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { postCard } from "../../../model/postCard";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

interface Props {
  post: postCard;
}

const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();
  const handleClickPost = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
        <StyledPaper
          sx={{
            my: 1,
            px: { xs: 2, sm: 5 },
            borderRadius: 5,
          }}
        >
          <Grid
            container
            wrap="nowrap"
            spacing={{ xs: 1, sm: 2 }}
            onClick={() => {
              handleClickPost(post.id);
            }}
          >
            <Grid item>
              <Avatar
                sx={{
                  height: { xs: "30px", sm: "40px" },
                  width: { xs: "30px", sm: "40px" },
                }}
                src={post.author.avatar}
              ></Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Stack>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "12px", sm: "16px" },
                  }}
                >
                  {post.author.userName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "14px" },
                  }}
                >
                  {post.approveDateTime}
                </Typography>
              </Stack>
            </Grid>
            <div className="textCategory">
              <Stack>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                  }}
                >
                  {post.category.name}
                </Typography>
              </Stack>
            </div>
          </Grid>
          <div style={{ marginTop: 20, marginBottom: 5 }} className="textTitle">
            {post.title}
          </div>
          <div style={{ marginBottom: 20 }} className="textTags">
            {post.hashTags}
          </div>
          <hr />
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
                {post.totalLikes}
              </div>
              <div className="postCommentText" onClick={() => setVisible(true)}>
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
                {post.totalComments}
              </div>
            </div>
            <div className="postBottomRight">
              <RemoveRedEyeIcon sx={{ color: "#818C99", marginRight: "5px" }} />
              {post.totalViews}
            </div>
          </div>
        </StyledPaper>
        {/* {visible && (
          <div className="commentCard">
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
      </Box>
    </div>
  );
};

export default PostCard;
