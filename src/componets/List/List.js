import styled from "styled-components"
import Button from "../Button"
import Label from "../Label"

const StyledList = styled.div`
display: flex;
justify-content: center;
padding-bottom: 20px;
`


const List = () => {
    return (
        <section>
        <form>
          <Label label_name='Новое задание' input_placeholder='Название'/>
          <StyledList >
          <Button button_name='Создать'/>
          </StyledList >
        </form>
      </section>
    )
}

export default List