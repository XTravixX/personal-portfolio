import styled from "styled-components"
import Card from "../card"

export const StyledSkillCard = styled(Card)`
  margin: 40px auto;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const StyledSkillItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  img {
    width: 80px;
  }
  label {
    width: 80px;
    font-size: 1rem;
    text-transform: uppercase;
    border-bottom: 5px solid #d8dadc;
    margin: 10px 0px;
    padding-bottom: 10px;
  }
  p {
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    width: inherit;
    margin: 20px 0px;
  }
`
