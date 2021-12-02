import styled from 'styled-components'

const StyledHeader = styled('header')`
background-color: black;
text-align: center;
border-radius: 50px 0 50px
;
>h1 {
    color: white;
}
>p {
    color: white; 
}
`;



const Header = (props) => {
    return (
        <StyledHeader>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        </StyledHeader>
    )
}
export default Header
