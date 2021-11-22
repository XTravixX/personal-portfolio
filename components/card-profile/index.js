import React from "react"
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <StyledCardProfile>
      <StyledProfileImage />
      <StyledContainer>
        <StyledGreetingIcon>{t('greeting')}</StyledGreetingIcon>
        <StyledTitle>
          {t('hi')} <span>{t('name')}</span>
        </StyledTitle>
        <StyledSubtitle>{t('ocupation')}</StyledSubtitle>

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
        <a href="mailto:ing.ricardovivas@gmail.com">
          <img src='gmail.svg'/>
        </a>
        <a href="https://linkedin.com/in/ricardo-vivas-68793b100">
          <img src='linkedin.svg'/>
        </a>
        <a href="https://github.com/XTravixX">
          <img src='github.svg'/>
        </a>
      </StyledFooterCardProfile>
    </StyledCardProfile>
  )
}

export default CardProfile
