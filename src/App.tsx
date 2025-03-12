import { GlobalStyle } from './components/ui/style/style'
import { InputNewTask } from './components/InputNewTask';
import { TasksList } from './components/TasksList';
import { Title } from './components/ui/Title/Title';
import { Wrapper } from './components/ui/Wrapper/Wrapper.styles';
import { AutoAddTasks } from './components/AutoAddTasks';



function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Список задач</Title>
        <AutoAddTasks />
        <InputNewTask />
        <TasksList />
      </Wrapper>
    </>
  );
}

export default App;
