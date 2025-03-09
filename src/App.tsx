import { GlobalStyle } from './components/ui/style/style'
import { InputNewTask } from './components/InputNewTask';
import { TasksList } from './components/TasksList';
import { Title } from './components/ui/Title/Title';
import { useAutoAddTasks } from './hooks/useAutoAddTasks';
import { Wrapper } from './components/ui/Wrapper/Wrapper.styles';



function App() {
  useAutoAddTasks()
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Список задач</Title>
        <InputNewTask />
        <TasksList />
      </Wrapper>
    </>
  );
}

export default App;
