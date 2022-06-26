import HeaderContainer from "../containers/common/HeaderContainer";
import MainResponsive from "../components/common/MainResponsive";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import styled from "styled-components";

const PostListPage = () => {
  return (
    <>
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
