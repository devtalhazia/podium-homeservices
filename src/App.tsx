import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Larry from './pages/Larry'
import WhyPodium from './pages/WhyPodium'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/ai/larry" element={<Larry />} />
        <Route path="/why-podium" element={<WhyPodium />} />
      </Routes>
    </BrowserRouter>
  )
}
