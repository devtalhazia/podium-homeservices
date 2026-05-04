import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TestFaq from './pages/TestFaq'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/faq" element={<TestFaq />} />
      </Routes>
    </BrowserRouter>
  )
}
