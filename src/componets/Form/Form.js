import Button from "../Button"

const Form = () => {
    return (
        <ul>
        <li>
          <p>Сходить в магазин</p>
          <div>
            <Button button_name='Выполнено'/>
            <Button button_name='Удалить'/>
          </div>
        </li>
        <li>
          <p>Покормить кота</p>
          <div>
            <Button button_name='Выполнено'/>
            <Button button_name='Удалить'/>
          </div>
        </li>
        <li>
          <p>Выучить JS</p>
          <div>
            <Button button_name='Выполнено'/>
            <Button button_name='Удалить'/>
          </div>
        </li>
      </ul>
    )
}

export default Form