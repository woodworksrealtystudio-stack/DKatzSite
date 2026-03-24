import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Woodworks Realty Studio - AI Systems for Real Estate',
  description: 'Custom AI automation and systems consulting for independent real estate brokers. Set up automations that save time and drive results.',
  openGraph: {
    title: 'Woodworks Realty Studio',
    description: 'AI systems consulting for real estate professionals',
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
        <meta name="theme-color" content="#faf9f7" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
