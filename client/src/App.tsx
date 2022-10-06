import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Meals 4 Aid</h1>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default App;
