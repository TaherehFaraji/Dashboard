import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Finance from './Pages/Finance'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/tickets" element={<div>صفحه تیکت‌ها</div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/games" element={<div>صفحه بازی‌ها</div>} />
          <Route path="/setting" element={<div>صفحه تنظیمات</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;