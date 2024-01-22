import './App.css'

const App = (props) => {
  console.log(props);
  const subject = 'React';
  return (
    <>
      <header>
        <h1>Hello {props.subject}!</h1>
        <button type='button'>Click me!</button>
      </header>
    </>
  )
}

export default App;