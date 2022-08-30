
import './App.css'
import useLogic from './hooks/useLogic'   // <-- Custom hook

export default function App() {
  const {
    text,
    words,
    timeRemaining,
    startGame,
    textBoxRef,

    handleChange,
    start
  } = useLogic(5)

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea
        ref={textBoxRef}
        autoFocus={startGame}
        name='text'
        value={text}
        onChange={handleChange}
        disabled={!startGame}
      />

      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={startGame} onClick={start}>Start</button>
      <h1>Word count: {words}</h1>
    </div>
  )
}
