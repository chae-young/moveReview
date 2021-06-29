import styled from "styled-components"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  desktop: "2560px",
}

export const device = {
  mobile: `(min-width: ${size.mobileS} and max-width: ${size.tablt})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

export const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`

export const HeaderUtillMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
`
export const Aside = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  width: 50vw;
  height: 100%;
  padding: 2rem;
  background: #fff;
  transform: ${(props) =>
    props.toggle ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.5s ease;
  box-sizing: border-box;
`
export const ErrorMsg = styled.div`
  color: red;
`

export const PopoverWrap = styled.div`
  padding: 2rem;
`
export const PopoverProfile = styled.div`
  display: flex;
`
export const PopoverBtn = styled.div`
  display: flex;
`
export const PopoverInfo = styled.div`
  padding: 1rem;
  & .nick {
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(0, 0, 0);
    &:hover {
      text-decoration: underline;
    }
  }
  & .id {
    display: block;
    margin-top: 10px;
    font-size: 1.2rem;
    color: rgb(102, 102, 102);
  }
`
export const PostListLi = styled.div`
  display: flex;
  & .post-list__img {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 148px;
    height: 148px;
    overflow: hidden;

    > img {
      flex: 1;
      height: 100%;
    }
  }
  & .post-list__con {
    display: flex;
    width: 100%;
    align-items: center;

    > p {
      flex: 8;
    }
    > span {
      flex: 1;
      text-align: center;
    }
  }
`
