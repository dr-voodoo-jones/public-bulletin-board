import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/create', label: 'Create Post', icon: '✏️' },
    { path: '/about', label: 'About', icon: 'ℹ️' }
  ]

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="w-5 h-5" />
      case 'dark':
        return <MoonIcon className="w-5 h-5" />
      default:
        return <ComputerDesktopIcon className="w-5 h-5" />
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect border-b border-white/20 dark:border-gray-700/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-3xl"
            >
              📌
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">Public Bulletin Board</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Share your stories with the world</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'hover:bg-primary-100 dark:hover:bg-primary-900/20 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden md:inline font-medium">{item.label}</span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'auto' : 'light'} mode`}
            >
              {getThemeIcon()}
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 