import AuthPageLayout from "./layouts/AuthPages/AuthPageLayout";
import LoginPage from "./pages/AuthPages/LoginPage";

function App() {
  return (
    <>
    <AuthPageLayout>
      <LoginPage/>
    </AuthPageLayout>
    </>
  );
}

export default App;
