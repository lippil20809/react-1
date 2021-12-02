import styled from 'styled-components'
import Button from "../Button"
import Label from "../Label"

const StyledFilter = styled('div')`
display: flex;
justify-content: space-evenly;
`



const Filter = () => {
    return (
        <section>
        <form>
            <Label label_name='Поиск по названию' input_placeholder='Начни вводить'/>
          <StyledFilter>
            <Button button_name='Все'/>
            <Button button_name='Выполненные'/>
            <Button button_name='Удалённые'/>
          </StyledFilter>
        </form>
      </section>
    )
}
export default Filter