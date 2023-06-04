import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link  to={'/'}>
      <header>
        <h1>Podcaster</h1>
      </header>
    </Link>

  );
}

export default Header;

