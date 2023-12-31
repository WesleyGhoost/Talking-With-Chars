import { Footer } from '../components/footer'
import { Header } from '../components/header'
import './globals.css'
import { Saira } from 'next/font/google'

const saria = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Talking With Chars',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saria.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
