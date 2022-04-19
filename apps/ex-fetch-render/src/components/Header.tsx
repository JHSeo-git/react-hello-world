import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const subTitle = useMemo(() => {
    if (pathname === '/profile/fetch-on-render') {
      return 'Fetch on render';
    }
    if (pathname === '/profile/fetch-then-render') {
      return 'Fetch then render';
    }
    if (pathname === '/profile/fetch-then-render-alter') {
      return 'Fetch then render alter';
    }
    if (pathname === '/profile/render-as-you-fetch') {
      return 'Render as you fetch';
    }
    return undefined;
  }, [pathname]);

  return (
    <header
      style={{
        borderBottom: '1px solid #ccc',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',

          height: '2rem',
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile/fetch-on-render">Profile(1)</NavLink>
        <NavLink to="/profile/fetch-then-render">Profile(2)</NavLink>
        <NavLink to="/profile/fetch-then-render-alter">Profile(2-2)</NavLink>
        <NavLink to="/profile/render-as-you-fetch">Profile(3)</NavLink>
      </nav>
      {subTitle && (
        <p style={{ textAlign: 'center' }}>
          render: <em style={{ color: 'red' }}>{subTitle}</em>
        </p>
      )}
    </header>
  );
}

export default Header;
