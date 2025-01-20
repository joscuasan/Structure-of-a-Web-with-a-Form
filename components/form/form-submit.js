'use client';

import { useFormStatus } from 'react-dom';

export default function ContactFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Sending...' : 'Send form'}
    </button>
  );
}
