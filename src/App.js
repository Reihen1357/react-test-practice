import ToDoList from './ToDo/ToDoList'


function App() {

  const todos = [
    {id:1, completed: false, title: 'Bread'},
    {id:2, completed: false, title: 'Milk'},
    {id:3, completed: false, title: 'Sosage'}
  ]

  return (
    <div className='wrapper'>
      <h1>React practice</h1>

      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
