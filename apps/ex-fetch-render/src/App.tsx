import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FetchOnRender from './pages/Profile/fetch-on-render';
import FetchThenRender from './pages/Profile/fetch-then-render';
import FetchThenRenderAlter from './pages/Profile/fetch-then-render-alter';
import RenderAsYouFetch from './pages/Profile/render-as-you-fetch';

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
          <Route path="/profile/fetch-on-render" element={<FetchOnRender />} />
          <Route path="/profile/fetch-then-render" element={<FetchThenRender />} />
          <Route path="/profile/fetch-then-render-alter" element={<FetchThenRenderAlter />} />
          <Route path="/profile/render-as-you-fetch" element={<RenderAsYouFetch />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
