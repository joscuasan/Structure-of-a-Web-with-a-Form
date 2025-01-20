import MainHeader from '@/app/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'TITLE',
  description: 'DESCRIPTION',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}