# Public Bulletin Board - Frontend

A beautiful, fun, and engaging React frontend for the Public Bulletin Board application where users can share stories, pictures, and thoughts with the world.

## 🚀 Features

- **Beautiful UI/UX**: Modern design with smooth animations and micro-interactions
- **Dark/Light Mode**: Automatic theme switching with user preference saving
- **Responsive Design**: Works perfectly on all devices
- **Real-time Updates**: Live post updates and interactions
- **Image Upload**: Drag & drop image uploads with preview
- **Search & Filter**: Find posts easily with tags and search
- **Infinite Scroll**: Smooth loading of posts
- **Social Sharing**: Share posts with the community

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Heroicons** for beautiful icons
- **Axios** for API communication

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Modal, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── posts/          # Post-related components
│   └── ui/             # UI-specific components
├── pages/              # Page components
├── context/            # React context providers
├── types/              # TypeScript type definitions
├── styles/             # Global styles
├── hooks/              # Custom React hooks
├── services/           # API services
└── utils/              # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Warm orange gradient (#f2751a)
- **Secondary**: Cool blue gradient (#0ea5e9)
- **Neutral**: Gray scale with dark mode support

### Components
- **Cards**: Elevated with hover effects
- **Buttons**: Interactive with scale animations
- **Inputs**: Clean with focus states
- **Modals**: Smooth transitions and backdrop blur

### Animations
- **Page Transitions**: Fade and slide effects
- **Micro-interactions**: Hover states and button feedback
- **Loading States**: Smooth spinners and skeletons

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Public Bulletin Board
```

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly interface

## 🌙 Dark Mode

The application supports:
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes
- **Auto Mode**: Follows system preference

## 🎯 Key Components

### PostCard
Beautiful cards displaying posts with:
- Image previews
- Like and view counts
- Author information
- Tags
- Hover animations

### PostForm
Intuitive form for creating posts with:
- Rich text input
- Image upload with drag & drop
- Tag selection
- Real-time validation

### Header
Navigation with:
- Logo and branding
- Navigation links
- Theme toggle
- Responsive design

## 🚀 Performance

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Builds**: Minified and compressed for production
- **Caching**: Service worker for offline support

## 🔒 Security

- **Input Validation**: Client-side validation
- **XSS Protection**: Sanitized content rendering
- **HTTPS**: Secure communication
- **CORS**: Proper cross-origin handling

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Include animations for better UX
4. Test on multiple devices
5. Update documentation

## 📄 License

This project is part of the Public Bulletin Board application.

---

**Happy coding! 🎉**

Remember: The goal is to create a fun, engaging, and beautiful user experience that encourages people to share their stories with the world. 