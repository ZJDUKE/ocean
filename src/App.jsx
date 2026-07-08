import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import OneMap from './pages/OneMap'
import Detail from './pages/Detail'

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/onemap" element={<OneMap />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </MainLayout>
      </ToastProvider>
    </BrowserRouter>
  )
}
