import { NavLink } from 'react-router-dom';

function Header() {
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

          height: '3.125rem',
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Header;
