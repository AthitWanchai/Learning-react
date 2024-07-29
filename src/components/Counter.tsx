type CounterProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  children: React.ReactNode,
}


const Counter = ({ setCounter, children }: CounterProps) => {
  return (
    <>
      <p>{children}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>
    </>
  )
}
export default Counter