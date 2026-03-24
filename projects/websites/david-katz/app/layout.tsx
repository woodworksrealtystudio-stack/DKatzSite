import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The D.F. Katz Law Firm - Criminal Defense & Business Law',
  description: 'Criminal defense and corporate law in Atlanta. Specializing in serious felonies, white-collar defense, privacy law, and data security.',
  openGraph: {
    title: 'The D.F. Katz Law Firm',
    description: 'Criminal Defense & Business Law in Atlanta, Georgia',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d1b2e" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
