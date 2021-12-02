import styled from "styled-components"

const StyledLabel = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`

const Label = (props) => {
    return (
        <StyledLabel>
            <label htmlFor="search">{props.label_name}</label>
            <input id="search" placeholder={props.input_placeholder} />
        </StyledLabel>
    )

}

export default Label