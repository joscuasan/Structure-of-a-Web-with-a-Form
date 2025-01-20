import Image from 'next/image';

import classes from './page.module.css';

export default function FirstPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>H1</h1>
            </header>
            <main className={classes.main}>
                <h1 className="">Different headings</h1>
                {/* <Image src={INSERTIMAGE} alt="Image name" /> */}
                <p>Description</p>
            </main>
        </>
    );
}
