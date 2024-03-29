import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from './NavBar';
import './globals.css';
import './theme-config.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Trackify',
  description: 'Track any Issue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.variable}>
          <Theme appearance="light" accentColor="violet">
            <ClerkProvider>
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </ClerkProvider>
          </Theme>
        </body>
      </html>
  );
}
