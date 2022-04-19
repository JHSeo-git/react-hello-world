import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main
        style={{
          paddingTop: '1rem',
        }}
      >
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
