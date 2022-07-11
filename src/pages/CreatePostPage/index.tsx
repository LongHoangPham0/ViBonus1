import { useEffect } from "react";
import {
  Paper,
  Stack,
  Grid,
  TextField,
  FormControl,
  Typography,
  MenuItem,
  Select,
  Divider,
  Button,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GET_TAG_LIST_REQUEST } from "../../redux/reducer/tagReducer/actionTypes";
import { GET_POST_CATEGORY_LIST_REQUEST } from "../../redux/reducer/postCategoryReducer/actionTypes";
import { POST_POST_LIST_REQUEST } from "../../redux/reducer/postReducer/actionTypes";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const CreatePostPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      title: "",
      categoryId: 0,
      hashTags: [""],
      content: "",
    },
  });
  const onSubmit = (datas: any) => {
    // const formdata = new FormData();
    // formdata.append("title", datas.title);
    // formdata.append(
    //   "thumbnail",
    //   "https://scontent.fsgn17-1.fna.fbcdn.net/v/t1.15752-9/290688374_1059373021359248_27471827527795510_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=24zysKK1EOMAX-vgjUG&_nc_ht=scontent.fsgn17-1.fna&oh=03_AVKlkAhD3aNTpcTVFsoh3K7XagJD24xOm79yG73jcaXhkQ&oe=62EF39FC"
    // );
    // formdata.append("slug", datas.title);
    // formdata.append("categoryId", datas.categoryId);
    // formdata.append("content", datas.content);
    // formdata.append("hashTags[]", datas.hashTags);
    const data = {
      title: datas.title,
      thumbnail:
        "https://scontent.fsgn17-1.fna.fbcdn.net/v/t1.15752-9/290688374_1059373021359248_27471827527795510_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=24zysKK1EOMAX-vgjUG&_nc_ht=scontent.fsgn17-1.fna&oh=03_AVKlkAhD3aNTpcTVFsoh3K7XagJD24xOm79yG73jcaXhkQ&oe=62EF39FC",
      slug: datas.title,
      categoryId: datas.categoryId,
      content: datas.content,
      hashTags: [datas.hashTags],
    };
    dispatch({ type: POST_POST_LIST_REQUEST, payload: data });
    reset();
    toast.success("Post created successfully!");
    navigate("/home");
  };
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate("/home");
  };
  const { postCategories } = useAppSelector(
    (state) => state.postCategoryReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: GET_TAG_LIST_REQUEST,
    });
    dispatch({
      type: GET_POST_CATEGORY_LIST_REQUEST,
    });
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant="h4">Create new post</Typography>
          <Paper sx={{ borderRadius: 4, padding: 2 }} elevation={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} md={9}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      placeholder="Post title"
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: { sx: "block", md: "none" } }}>
                <Divider variant="fullWidth" />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl
                  sx={{
                    borderLeft: 2,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                  }}
                  fullWidth
                  variant="standard"
                >
                  <Controller
                    name="categoryId"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} sx={{ paddingLeft: 2 }} displayEmpty>
                        <MenuItem value={0}>Select Category</MenuItem>
                        {postCategories?.data.map(
                          (category: any, index: number) => (
                            <MenuItem key={index} value={category.id}>
                              {category.name}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Divider variant="fullWidth" />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="hashTags"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      placeholder="#Tag"
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ borderRadius: 4 }} elevation={0}>
            <Controller
              name="content"
              control={control}
              render={({ field }) => <ReactQuill {...field} theme="snow" />}
            />
          </Paper>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" fullWidth onClick={handleClickBtn}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              fullWidth
              color="error"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default CreatePostPage;
