import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setPosition(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}
