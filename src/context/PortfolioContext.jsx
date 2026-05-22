import { createContext, useContext, useMemo, useState } from 'react'
import projects from '../data/projects.js'
import certificates from '../data/certificates.js'
import skills from '../data/skills.js'
import timeline from '../data/timeline.js'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeCertCategory, setActiveCertCategory] = useState('all')
  const [modalData, setModalData] = useState(null)

  const values = useMemo(
    () => ({
      projects,
      certificates,
      skills,
      timeline,
      activeFilter,
      setActiveFilter,
      activeCertCategory,
      setActiveCertCategory,
      modalData,
      setModalData,
    }),
    [activeFilter, activeCertCategory, modalData],
  )

  return <PortfolioContext.Provider value={values}>{children}</PortfolioContext.Provider>
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}
