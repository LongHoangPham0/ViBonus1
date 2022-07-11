import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postCard } from "../../../model/postCard";

export interface PostType {
  posts: {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    data: postCard[];
  };
  loading: boolean;
  post: postCard | null;
}

const initialState: PostType = {
  posts: {
    pageIndex: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
    data: [],
  },
  loading: false,
  post: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    getPostREQUEST(
      state: PostType,
      action: PayloadAction<any>
    ) {
      state.posts = {
        ...state.posts,
        ...action.payload,
        data: state.posts.data.concat(action.payload.data),
      };
      
    },
    getPostSuccess(state: PostType, action: PayloadAction<any>) {
      state.posts = action.payload
    },
    postPostSuccess(state: PostType, action: PayloadAction<any>) {
      alert("Success");
    },
    getPostByIdSuccess(state: PostType, action: PayloadAction<any>) {
      state.post = action.payload;
    },
  },
});

// Actions
export const {
  getPostSuccess,
  postPostSuccess,
  setLoading,
  getPostREQUEST,
  getPostByIdSuccess,
} = postSlice.actions;

export default postSlice.reducer;
