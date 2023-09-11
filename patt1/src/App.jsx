import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const Stats = ({ props }) => {
  const { good, neutral, bad } = props
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickOnGood = () => setGood(good + 1)
  const clickOnNeutral = () => setNeutral(neutral + 1)
  const clickOnBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button action={clickOnGood} text='good' />
      <Button action={clickOnNeutral} text='neutral' />
      <Button action={clickOnBad} text='bad' />
      <Stats props={{ good, neutral, bad }} />
    </div>
  )
}

export default App