import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
// import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* <Image src={logoImg} alt="Brand" priority /> */}
          Brand
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/">Main page</NavLink>
            </li>
            <li>
              <NavLink href="/firstPage">Firs page</NavLink>
            </li>
            <li>
              <NavLink href="/secondPage">Second page</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
