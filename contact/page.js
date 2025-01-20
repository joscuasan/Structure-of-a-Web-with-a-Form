import { Image } from 'next/image';
import Link from 'next/link';

import classes from './page.module.css';

export default function ContactPage() {
    return (
        <>
            <h1 className="">Contact</h1>
            <p>Add contact locations</p>
            <p>Use the contact form</p>
            <Link href="/contact/form">Form</Link>
        </>
    );
}
