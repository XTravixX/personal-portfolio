import React from "react"
import {
  StyledContainer,
  StyledCardProfile,
  StyledFooterCardProfile,
  StyledProfileImage,
  StyledGreetingIcon,
  StyledTitle,
  StyledSubtitle,
  StyledDetailList,
  StyledDetailRow,
  StyledDetailTitle,
  StyledDetailValue,
} from "./styles"

const ProfileDetails = [
  { title: "AGE", value: "29" },
  {
    title: "ADDRESS",
    value: "24058, Belgium, Brussels, Liutte 27, BE",
  },
  {
    title: "E-MAIL",
    value: "robertsmith@company.com",
  },
  {
    title: "PHONE",
    value: "+1 256 254 84 56",
  },
  {
    title: "FREELANCE",
    value: "till March 25, 2018",
  },
]
function CardProfile(props) {
  return (
    <StyledCardProfile>
      <StyledProfileImage />
      <StyledContainer>
        <StyledGreetingIcon>Hello</StyledGreetingIcon>
        <StyledTitle>
          I&apos;m <span>Ricardo Vivas</span>
        </StyledTitle>
        <StyledSubtitle>Developer and Startup entrepreneur</StyledSubtitle>

        <hr />

        <StyledDetailList>
          {ProfileDetails.map(({ title, value }) => (
            <StyledDetailRow key={`${title}-${value}`}>
              <StyledDetailTitle>{title}</StyledDetailTitle>
              <StyledDetailValue>{value}</StyledDetailValue>
            </StyledDetailRow>
          ))}
        </StyledDetailList>
      </StyledContainer>
      <StyledFooterCardProfile>
        <a>GMAIl</a>
        <a>LINKE</a>
        <a>LINKEGi</a>
      </StyledFooterCardProfile>
    </StyledCardProfile>
  )
}

export default CardProfile
