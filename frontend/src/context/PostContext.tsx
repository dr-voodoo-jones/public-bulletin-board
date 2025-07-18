import React, { createContext, useContext, useState, useEffect } from 'react'
import { Post, PostFilters } from '../types/post'

interface PostContextType {
  posts: Post[]
  loading: boolean
  error: string | null
  filters: PostFilters
  setFilters: (filters: PostFilters) => void
  addPost: (post: Post) => void
  updatePost: (id: string, updates: Partial<Post>) => void
  deletePost: (id: string) => void
  refreshPosts: () => void
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export const usePosts = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider')
  }
  return context
}

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<PostFilters>({
    search: '',
    tags: [],
    sortBy: 'newest'
  })

  const addPost = (post: Post) => {
    setPosts(prev => [post, ...prev])
  }

  const updatePost = (id: string, updates: Partial<Post>) => {
    setPosts(prev => prev.map(post => post.id === id ? { ...post, ...updates } : post))
  }

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id))
  }

  const refreshPosts = () => {
    // This will be implemented when we connect to the backend
    console.log('Refreshing posts...')
  }

  const value = {
    posts,
    loading,
    error,
    filters,
    setFilters,
    addPost,
    updatePost,
    deletePost,
    refreshPosts
  }

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  )
} 