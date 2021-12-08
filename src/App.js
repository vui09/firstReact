import './assets/_global.scss'
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [date, setDate] = useState(8)

  return (
    <div className="App">
      <Header
        date={date}
        setDate={setDate}
      />

      <Counter />

      <TodoList />
    </div>
  );
}

export default App;
