import Link from 'next/link';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
      </header>
      <main>
        <section className={classes.section}>
          <h1>H1</h1>
          <div>Pictures</div>
          <p>
            Text
          </p>
          <p>
            Text...
          </p>
        </section>
      </main>
    </>
  );
}
