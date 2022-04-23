import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NoSuspense from './pages/profile/no-suspense-race-condition';
import Suspense from './pages/profile/suspense-race-condition';

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
          <Route path="/profile/no-suspense-race-condition" element={<NoSuspense />} />
          <Route path="/profile/suspense-race-condition" element={<Suspense />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
