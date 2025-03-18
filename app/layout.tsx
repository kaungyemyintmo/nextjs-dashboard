// This is called a root layout and is required in every Next.js application.
// Any UI you add to the root layout will be shared across all pages in your application. 
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind antialiased class smoothes out the font 
      By adding Inter to the body element, the font is applied throughout the application */}
      <body className={`${inter.className} antialiased`}>{children}</body>

      {/* <body>{children}</body> */}
      </html>
  );
}
