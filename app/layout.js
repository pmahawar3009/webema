'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import ThemeRegistry from '@/components/ThemeRegistry'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'DevOps Maturity Assessment',
//   description: 'DevOps Maturity Assessment',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeRegistry>
          <body className={inter.className}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <CssBaseline />
              <Navbar />
              <Sidebar />
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: 8, width: '80%' }}>
                {children}
              </Box>
            </Box>
          </body>
        </ThemeRegistry>
      </StoreProvider>
    </html>
  )
}
