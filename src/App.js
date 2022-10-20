import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "./assets/styles/Reset";
import GlobalStyles from "./assets/styles/GlobalStyles";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage";
import UserDataProvider from "./contexts/userData";

export default function App() {
  return (
    <BrowserRouter>
      <UserDataProvider>
        <Reset />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </UserDataProvider>
    </BrowserRouter>
  );
}
