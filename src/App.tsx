import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Larry from './pages/Larry'
import WhyCloseCrew from './pages/WhyPodium'

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    let attempts = 0
    const maxAttempts = 20

    const timer = window.setInterval(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.clearInterval(timer)
        return
      }

      attempts += 1
      if (attempts >= maxAttempts) {
        window.clearInterval(timer)
      }
    }, 50)

    return () => window.clearInterval(timer)
  }, [hash, pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/ai/larry" element={<Larry />} />
        <Route path="/why-closecrew" element={<WhyCloseCrew />} />
      </Routes>
    </BrowserRouter>
  )
}
