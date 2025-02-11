import Link from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <SignOut />
        </>
      )}
      {!user && <Link href="/signin">Sign In</Link>}
    </NavStyles>
  );
}
