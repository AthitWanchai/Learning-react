import Section from "./components/Section.tsx";
import Counter from "./components/Counter.tsx";
import List from "./components/List.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Login from "./components/Login.tsx";
import Myform from "./components/Myform.tsx";
import { useState } from 'react'

function App() {
  let isLogin: boolean = true;
  const [counter, setCounter] = useState<number>(1);

  if (isLogin) {
    return (
      <>
        <div>
        <Myform/>
        </div>
        <Dashboard />
        <List items={["⭐Star", "🍴Fork", "🔥Fire"]} render={(item) => <i>{item}</i>}></List>
        <Section title="Topics">
          - Hello World
          - bye bye World
        </Section>
        <Counter setCounter={setCounter}>counter = {counter}</Counter>
      </>
    )
  } else {
    return <Login />
  }
}

export default App;
