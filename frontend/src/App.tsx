import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { Toaster } from './components/ui/sonner'
import ErrorPage from './pages/error'
import User from './pages/user'
import About from './pages/about'
import ProtectedRoute from './components/auth/protectedRoute'
import PublicRoute from './components/auth/publicRoute'

function App() {
  return (
    <>
    <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="*" element={<ErrorPage onGoHome="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
