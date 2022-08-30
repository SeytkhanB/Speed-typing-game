
import { useEffect, useState, useRef } from 'react'

// CUSTOM HOOK
export default function useLogic(startingTime = 10) {
  const [text, setText] = useState('')
  const [words, setWords] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [startGame, setStartGame] = useState(false)
  const textBoxRef = useRef(null)
  

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function start() {
    setStartGame(true)
    setText('')
    setWords(0)
    textBoxRef.current.disabled = false   // in order to work line below
    textBoxRef.current.focus()
  }

  useEffect(() => {
    if (startGame && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
    }
    if (timeRemaining === 0) {
      const arrWords = text.split(' ')
      const wordsLength = arrWords.filter(word => word !== '').length
      setWords(wordsLength)
      setStartGame(false)
      setTimeRemaining(startingTime)
    }
  }, [timeRemaining, startGame])

  return {
    text,
    words,
    timeRemaining,
    startGame,
    textBoxRef,

    handleChange,
    start
  }
}