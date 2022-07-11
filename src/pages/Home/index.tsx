import { useEffect } from "react";
import "./styles.css";
/////
import InputVibonus from "../../components/global/InputVibonus";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  GET_POST_LIST_2_REQUEST,
  GET_POST_LIST_REQUEST,
} from "../../redux/reducer/postReducer/actionTypes";
import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface HomeProps {
  type: string;
}

const Home = ({ type }: HomeProps) => {
  const { posts } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: GET_POST_LIST_REQUEST,
      payload: {
        pageIndex: 1,
      },
    });
  }, [dispatch]);

  const fetchMoreData = () => {
    dispatch({
      type: GET_POST_LIST_2_REQUEST,
      payload: {
        pageIndex: posts.pageIndex + 1,
      },
    });
  };

  return (
    <>
      {posts.pageSize ? (
        <div>
          <InputVibonus />
          <InfiniteScroll
            dataLength={posts.pageSize}
            next={fetchMoreData}
            style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
            inverse={false}
            hasMore={posts.pageIndex < posts.totalPages}
            loader={<h4>Loading...</h4>}
            scrollThreshold="200px"
          >
            {posts.data
              //   .filter((dataVibonus) =>
              //     dataVibonus.category.name.includes("Vibonus")
              //   )
              .map((item, index) => (
                <div key={index}>
                  <PostCard post={item} />
                </div>
              ))}
          </InfiniteScroll>
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
};

export default Home;
