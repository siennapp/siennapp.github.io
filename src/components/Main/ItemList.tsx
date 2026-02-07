import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"
import { PostListItemType } from "types/PostItem.types"
import { AiFillGithub } from "react-icons/ai"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
// import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

type PostListProps = {
  posts: PostListItemType[]
}

const TitleBox = styled.div`
  padding-top: 70px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    height: 60vw;
  }
`
const ListTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 3.75rem;
  font-weight: 800;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 9.5vw;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-bottom: 140px;
  position: relative;
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-gap: 20px;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
const Outlink = styled.a`
  position: absolute;
  right: 0;
  top: -50px;
  opacity: 0.7;
  transition: all 0.12s;
  svg {
    fill: #ffffff;
  }
  &:hover {
    opacity: 1;
  }
`

const ItemList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <div className="container">
      <TitleBox>
        <ListTitle>Work Portfolio</ListTitle>
      </TitleBox>
      <List>
        {/* <Outlink href="https://github.com/siennapp/siennapp.github.io" target={'_blank'} title={'포트폴리오 깃헙 레파지토리 바로가기'}
            ><AiFillGithub size={23}/></Outlink> */}
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostItem {...frontmatter} link={slug} key={id} />
          )
        )}
      </List>
    </div>
  )
}

export default ItemList
