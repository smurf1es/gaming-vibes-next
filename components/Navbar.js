import Link from 'next/link';
import Image from 'next/image';
import AuthContext from '../stores/authContext';
import { useContext } from 'react';

export default function Navbar() {
  const { login, logout, user, authReady } = useContext(AuthContext);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            {!user && (
              <li className="btn" onClick={login}>
                Login/Signup
              </li>
            )}
            <li>{user?.email}</li>
            {user && (
              <li className="btn" onClick={logout}>
                Logout
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
