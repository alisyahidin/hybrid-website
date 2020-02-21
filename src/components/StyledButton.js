import styled from 'styled-components'

const Button = styled.button`
  background: ${({ disabled }) => disabled ? 'linear-gradient(45deg,#908787 30%,#b1b1b1 90%)' : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'};
  border: 0px;
  border-radius: 3px;
  box-shadow: 0px 3px 5px 2px rgba(33, 203, 243, .3);
  color: white;
  height: 38px;
  padding: 0px 30px;
  margin: 8px;
`

export default Button