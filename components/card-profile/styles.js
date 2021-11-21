import styled from "styled-components"
import Card from "../card"

export const StyledCardProfile = styled(Card)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 40px;
  padding-bottom: 120px;
  max-width: 850px;
  align-items: center;
  justify-content: center;
  hr {
    margin: 30px 0px;
    border: none;
    border-bottom: 0.5px solid #ccc;
  }
  @media (max-width: 900px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const StyledProfileImage = styled.img`
  content: url("https://picsum.photos/330/360");
  width: 330px;
  height: 360px;
  margin-right: 50px;
  
  @media (max-width: 900px) {
    margin: 0px;
    width: 400px;
    height: 460px;
  }
`
export const StyledGreetingIcon = styled.span`
  background: var(--primary-color);
  text-transform: uppercase;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 80px;
  height: 30px;
  text-align: center;
  position: relative;
  color: var(--text-default-invert);
  letter-spacing: 0.1em;

  &::before {
    position: absolute;
    bottom: -10px;
    left: 5px;
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 10px solid var(--primary-color);
  }

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 150px;
    height: 30px;
  }
`
export const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: 100;
  span {
    font-weight: bold;
  }

  @media (max-width: 900px) {
    text-align: center;
    font-size: 2.8em;
  }
`
export const StyledSubtitle = styled.h2`
  font-size: 1em;
  font-weight: 100;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 1.4em;
  }
`
export const StyledDetailList = styled.div`
  width: 100%;

`
export const StyledDetailRow = styled.div`
  display: flex;
  font-size: 0.9em;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`
export const StyledDetailTitle = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  width: 100px;
  font-size: 0.85em;
`
export const StyledDetailValue = styled.div`
  color: var(--text-muted);
`

export const StyledFooterCardProfile = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: var(--primary-color);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    padding: 10px;
    border-radius: 5px;
    transition: all .5s;
    background: var(--primary-color);
    color: #fff;
    &:hover {
      background: #fff;
      color: var(--primary-color);
      cursor: pointer;
      opacity: 0.9;
      transform: rotate(360deg);
      
    }
  }
`
