import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'
import HomePage from './pages/HomePage.tsx'
import CreatePostPage from './pages/CreatePostPage.tsx'
import PostDetailPage from './pages/PostDetailPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import FloatingButton from './components/ui/FloatingButton.tsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePostPage />} />
              <Route path="/post/:id" element={<PostDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <FloatingButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App 