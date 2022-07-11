import { useEffect } from "react";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GET_POST_LIST_REQUEST } from "../../../redux/reducer/postReducer/actionTypes";
import { GET_USER_ID_LIST_REQUEST } from "../../../redux/reducer/userIDReducer/actionTypes";
import InputViforum from "../../../components/global/InputViforum";
import PostCard from "../PostCard";

interface HomeProps {
  type: string;
}

const Viforum = ({ type }: HomeProps) => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch({
      type: GET_POST_LIST_REQUEST,
    });
    dispatch({
      type: GET_USER_ID_LIST_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      <InputViforum />
      {posts.data
        .filter((dataVibonus) => !dataVibonus.category.name.includes("Vibonus"))
        .map((item, index) => (
          <div key={index}>
            <PostCard post={item} />
          </div>
        ))}
    </>
  );
};

export default Viforum;
