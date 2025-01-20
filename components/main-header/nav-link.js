'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname();

  const isActive =
    href === '/' ? path === href : path.startsWith(href) && href !== '/';

  return (
    <Link
      href={href}
      className={
        isActive
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}