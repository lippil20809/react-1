import styled from "styled-components"

const Buttons = styled.button`
  background: black;
  border-radius: 3px;
  color: white;
`



const Button = (props) => {
    return (
        <Buttons type="button">{props.button_name}</Buttons>
    ) 
}

export default Button