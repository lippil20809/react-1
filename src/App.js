import styled from 'styled-components'
import Header from "./componets/Header";
import Filter from "./componets/Filter";
import Form from "./componets/Form";
import List from "./componets/List";


const AppWraper = styled.div`
width: 400px;
margin: 0 auto;
background: green;
border-radius: 50px 0 50px 0;
`

function App() {
  return (
    <AppWraper>
      <Header title='Todo list' subtitle='Количество записей 10'/>
      <Filter/>
      <Form/>
      <List/>
    </AppWraper>
  );
}

export default App;
