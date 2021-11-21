import styled from 'styled-components';

export const Button = styled.button`
  font-size: .9em;
  font-weight: bold;
  padding: 20px 55px;
  border: 1px solid #cbcdcf;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 40px;
  border-radius: 2px;
  &:hover {
    opacity: .95;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  }
`;