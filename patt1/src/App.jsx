import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const StatsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.calcMethod}</td>
    </tr>
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
      <table>
        <tbody>
          <StatsLine text='good' calcMethod={good} />
          <StatsLine text='neutral' calcMethod={neutral} />
          <StatsLine text='bad' calcMethod={bad} />
          <StatsLine text='all' calcMethod={all} />
          <StatsLine text='average' calcMethod={average} />
          <StatsLine text='positive' calcMethod={positive + ' %'} />
        </tbody>
      </table>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votesNum, setVotesNum] = useState(Array(anecdotes.length).fill(0))
  const [topVotedAnecdoteIndex, setTopVotedAnecdoteIndex] = useState(0)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const clickOnGood = () => setGood(good + 1)
  const clickOnNeutral = () => setNeutral(neutral + 1)
  const clickOnBad = () => setBad(bad + 1)
  const clickOnAnecdoteBtn = () => setSelected(getRandomInt(anecdotes.length))
  const clickVote = () => {
    const newVotesNum = [...votesNum]
    newVotesNum[selected] += 1
    setVotesNum(newVotesNum)
    const topAnecdoteVotesNum = Math.max(...newVotesNum)
    const isTopAnecdoteVotesNum = (num) => num === topAnecdoteVotesNum;
    setTopVotedAnecdoteIndex(newVotesNum.findIndex(isTopAnecdoteVotesNum))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button action={clickOnGood} text='good' />
      <Button action={clickOnNeutral} text='neutral' />
      <Button action={clickOnBad} text='bad' />
      <h1>statistics</h1>
      <Stats props={{ good, neutral, bad }} />
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has votes total: {votesNum[selected]}</p>
      <br />
      <Button action={clickVote} text='Vote' />
      <Button action={clickOnAnecdoteBtn} text='Randomize Anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[topVotedAnecdoteIndex]}
      <p>Has votes total: {votesNum[topVotedAnecdoteIndex]}</p>
    </div>
  )
}

export default App