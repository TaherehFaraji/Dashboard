import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance" element={<div>صفحه مالی</div>} />
          <Route path="/tickets" element={<div>صفحه تیکت‌ها</div>} />
          <Route path="/users" element={<div>صفحه کاربران</div>} />
          <Route path="/games" element={<div>صفحه بازی‌ها</div>} />
          <Route path="/setting" element={<div>صفحه تنظیمات</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;