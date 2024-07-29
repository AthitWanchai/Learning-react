import Section from "./components/Section.tsx";
import Counter from "./components/Counter.tsx";
import List from "./components/List.tsx";
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      <List items={["⭐Star","🍴Fork","🔥Fire"]} render={(item) => <i>{item}</i>}></List>
      <Section title="Topics">
        - Hello World
        - bye bye World
      </Section>
      <Counter setCounter={setCounter}>counter = {counter}</Counter>
    </>

  );
}

export default App;
