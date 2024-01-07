import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

// set poppins with weigh 200,400,600,800 subset latin
const poppins = Poppins({ weight: [ '200', '400', '600', '800'], subsets: ['latin'] });


export const metadata = {
  title: 'Dinamik18 - Buat Catatan Keuanganmu',
  description: 'Dinamik18 catat keuangan yang dibuat untuk memudahkan pengguna dalam mencatat keuangan acara.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-zinc-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
