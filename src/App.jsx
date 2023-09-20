import './App.css'
import AuthTextInput from './components/AuthPages/AuthTextInput'
import SignButton from './components/AuthPages/SignButton'

function App() {

  return (
    <>
    <AuthTextInput inputType="password" placeholder="password"/>
    <SignButton label={"SignIn"} />
    </>
  )
}

export default App
