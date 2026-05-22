import { useEffect, useState } from 'react'

const titles = ['Full-Stack Developer', 'Computer Science Student', 'UI/UX Enthusiast']

export default function useTypewriter(delay = 80, pause = 1500) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const title = titles[titleIndex]
    const isDeleting = index > title.length
    let timer = null

    if (!isDeleting) {
      timer = window.setTimeout(() => {
        setText(title.slice(0, index + 1))
        setIndex(index + 1)
      }, delay)
    } else {
      timer = window.setTimeout(() => {
        setText(title.slice(0, title.length - (index - title.length)))
        setIndex(index + 1)
      }, 40)
    }

    if (index === title.length + 12) {
      timer = window.setTimeout(() => {
        setIndex(title.length + 1)
      }, pause)
    }
    if (index === 2 * title.length + 12) {
      setIndex(0)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }

    return () => window.clearTimeout(timer)
  }, [index, titleIndex, delay, pause])

  return text
}
