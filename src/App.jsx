import "./App.css";
import AuthPage from "./layouts/AuthPage/AuthPage";
import LoginPage from "./pages/AuthPages/LoginPage";

function App() {
  return (
    <>
      <AuthPage>
        <LoginPage/>
      </AuthPage>
    </>
  );
}

export default App;
