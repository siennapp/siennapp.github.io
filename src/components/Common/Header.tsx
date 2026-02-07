import React, { FunctionComponent, useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { AiFillGithub, AiOutlineCodepen, AiOutlineUser } from "react-icons/ai"

const HeaderWrap = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  // background-color: rgba(255, 255, 255, 0.1);
  /* background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(15px); */
  color: #ffffff;
  b {
    transition: 0.12s;
  }
  &.fixed {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    color: #444444;
  }
  @media (max-width: 480px) {
    height: 60px;
  }
`
const HeaderContent = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  b {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  .outlink-list {
    display: flex;
    align-items: center;
  }
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`
const Outlink = styled.a`
  display: inline-flex;
  align-items: center;
  margin: 0 8px;
  svg {
    transition: 0.12s;
    &:hover {
      fill: #3dd065;
    }
  }
`
const Circle = styled(Link)`
  width: 30px;
  height: 30px;
  background: #3dd065;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #ffffff;
`
export const ScrollDetector = () => {
  const [navbar, setNavbar] = useState(false)

  const fixNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", fixNavbar)
  }

  return navbar
}

const Header: FunctionComponent = function () {
  return (
    <HeaderWrap className={ScrollDetector() ? "fixed" : ""}>
      <div className="container">
        <HeaderContent>
          <div style={{ display: "flex" }}>
            <Circle to={"/"}>S</Circle>
            <b style={{ paddingRight: 20 }}>Sieun Park </b>
          </div>
          {/* <span style={{paddingLeft: 7, paddingRight: 15}}> 프론트엔드</span> */}
          <div className="outlink-list">
            {/* <Outlink href="https://my.surfit.io/w/143670746" target={'_blank'}><AiOutlineUser size={22}/></Outlink>
                    <Outlink href="https://my.surfit.io/w/143670746" target={'_blank'}><AiFillGithub size={23}/></Outlink> */}
            <Outlink href="https://my.surfit.io/w/143670746" target={"_blank"}>
              <AiOutlineUser size={22} />
            </Outlink>
            <Outlink href="https://github.com/siennapp" target={"_blank"}>
              <AiFillGithub size={23} />
            </Outlink>
            <Outlink href="https://codepen.io/siennapp" target={"_blank"}>
              <AiOutlineCodepen size={24} />
            </Outlink>
          </div>
        </HeaderContent>
      </div>
    </HeaderWrap>
  )
}

export default Header
