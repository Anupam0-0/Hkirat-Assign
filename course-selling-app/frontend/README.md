# React + Vite

# Structure

src/
├── api/
│   └── axiosInstance.js         # Axios instance for API calls
├── components/                  # Reusable components
│   ├── CourseCard.jsx           # Displays course details
│   ├── Navbar.jsx               # Navigation bar
│   └── ProtectedRoute.jsx       # Route protection based on auth
├── context/
│   └── AuthContext.jsx          # Context for authentication
├── hooks/
│   └── useAuth.js               # Custom hook to manage auth logic
├── pages/
│   ├── Login.jsx                # Login page
│   ├── Signup.jsx               # Signup page
│   ├── Courses.jsx              # Course listing
│   ├── CourseDetails.jsx        # Detailed course view
│   ├── Purchases.jsx            # User's purchased courses
│   └── NotFound.jsx             # 404 page
├── utils/
│   └── helpers.js               # Utility functions (e.g., token handling)
├── App.js                       # Main app entry point
├── index.js                     # ReactDOM render
└── styles/                      # CSS or styling files
