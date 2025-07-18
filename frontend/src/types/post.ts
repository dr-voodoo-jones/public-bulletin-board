export interface Post {
  id: string
  title: string
  content: string
  images: string[]
  author: string
  createdAt: string
  updatedAt: string
  likes: number
  views: number
  tags: string[]
  isActive: boolean
}

export interface CreatePostData {
  title: string
  content: string
  images: File[]
  tags: string[]
}

export interface PostFilters {
  search: string
  tags: string[]
  sortBy: 'newest' | 'oldest' | 'popular'
} 