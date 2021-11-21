import React from "react"
import { StyledSkillCard, StyledSkillItem } from "./styles"

const skillList = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/80px-React-icon.svg.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    name: "Laravel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/80px-React-icon.svg.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/80px-React-icon.svg.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
]

function Skills(props) {
  return (
    <StyledSkillCard>
      {skillList.map((skill, index) => (
        <StyledSkillItem key={skill.name}>
          <img src={skill.logo} alt={skill.name} />
          <label>{skill.name}</label>
          <p>{skill.description}</p>
        </StyledSkillItem>
      ))}
    </StyledSkillCard>
  )
}

export default Skills
