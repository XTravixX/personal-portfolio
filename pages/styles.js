import styled from "styled-components"

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

export const StyledLanguage = styled.div`
  margin-left: auto;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--text-default-invert);
  outline: none;
  user-select: none;

`
export const StyledDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
  margin: 25px 0px;
`
