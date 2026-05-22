import { PortfolioProvider } from './context/PortfolioContext.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollProgress from './components/effects/ScrollProgress.jsx'
import AppRoutes from './routes.jsx'

function App() {
  return (
    <PortfolioProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-body text-slate-100">
        <Navbar />
        <main className="overflow-hidden">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  )
}

export default App
