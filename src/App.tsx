import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Larry from './pages/Larry'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/ai/larry" element={<Larry />} />
      </Routes>
    </BrowserRouter>
  )
}
