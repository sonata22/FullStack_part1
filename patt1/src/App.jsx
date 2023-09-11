import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const Stats = ({ props }) => {
  const { good, neutral, bad } = props
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = good * 100 / all
  return (
    <>
      <p>good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {all}
        <br />
        average {average}
        <br />
        positive {positive} %
      </p>
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
      <h1>statistics</h1>
      <Stats props={{ good, neutral, bad }} />
    </div>
  )
}

export default App