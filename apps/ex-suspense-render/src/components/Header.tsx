import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const subTitle = useMemo(() => {
    if (pathname === '/profile/no-suspense-race-condition') {
      return 'No Suspense in race-condition';
    }
    if (pathname === '/profile/suspense-race-condition') {
      return 'Suspense in race-condition';
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
        <NavLink to="/profile/no-suspense-race-condition">No suspense</NavLink>
        <NavLink to="/profile/suspense-race-condition">Suspense</NavLink>
      </nav>
      {subTitle && (
        <p style={{ textAlign: 'center' }}>
          <small>
            render: <em style={{ color: 'red' }}>{subTitle}</em>
          </small>
        </p>
      )}
    </header>
  );
}

export default Header;
