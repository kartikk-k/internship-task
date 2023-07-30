import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../../context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </AuthProvider>
}
