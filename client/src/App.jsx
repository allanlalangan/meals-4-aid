import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='flex'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
