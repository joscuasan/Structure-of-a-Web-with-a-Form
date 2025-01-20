'use client';

import classes from './page.module.css';
import ContactFormSubmit from '@/app/components/form/form-submit';
import { useState } from 'react';

export default function SendFormPage() {
    // To manage the states error/success
    const [state, setState] = useState({ message: null, error: null, loading: false });

    // To send the form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default behavior of the form
        setState({ ...state, loading: true }); // Set the form to loading state

        // Collecting the form fields
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            // Send to the endpoint `/api/contact`
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            // If there is any problem, throw an error
            if (!res.ok) {
                throw new Error('Error sending the form');
            }

            // Success
            setState({ message: 'Email sent successfully.', error: null, loading: false });
        } catch (error) {
            // Handle errors
            console.error(error);
            setState({ message: null, error: 'Error sending the email.', loading: false });
        }
    };

    return (
        <>
            <header className={classes.header}>
                <h1>
                    <span className={classes.highlight}>Contact Form</span>
                </h1>
            </header>
            <main className={classes.main}>
                {/* onSubmit for the form */}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </p>
                    {/* Success or error messages */}
                    {state.message && <p className={classes.success}>{state.message}</p>}
                    {state.error && <p className={classes.error}>{state.error}</p>}
                    <p className={classes.actions}>
                        {/* Button with loading state */}
                        <ContactFormSubmit pending={state.loading} />
                    </p>
                </form>
            </main>
        </>
    );
}
