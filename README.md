# Movie Database Browser - React Assessment

**Time Limit:** 3 hours

---

## 📋 Problem

Build a movie database browser that demonstrates:

- API integration with loading/error states
- Redux state management (useReducer + Context or Redux Toolkit)
- React Router with dynamic routes
- Search, filtering, and pagination
- User features (watchlist, favorites)
- Performance optimization

**API:** [OMDb API](http://www.omdbapi.com/) (Free, no credit card required)

---

## 🚀 Quick Start

### Prerequisites

- Node.js v22+
- npm or yarn
- Git
- GitHub account
- Vercel account (free)
- OMDb account (free)

### Setup

### 1. Get Your API Key

1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Select "FREE" tier (1,000 requests/day)
3. Enter your email
4. Check email for API key
5. Activate the key via email link

### 2. Fork and clone this repository
git clone https://github.com/YOUR_USERNAME/assessment-30jan.git
cd fullstack-assessment

### 3. Setup Project

```bash
npm install
```

### 4. Configure API Key

Create `.env` file in project root:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

**⚠️ IMPORTANT:** Never commit `.env` file. It's already in `.gitignore`.

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 🎯 Required Features

### Core Features (Must Complete)

#### 1. Movie Search (30 min)

- [ ] Search bar in header (always visible)
- [ ] Search movies by title
- [ ] Display results in grid (4 columns on desktop, 2 on tablet, 1 on mobile)
- [ ] Show: poster, title, year, type (movie/series)
- [ ] Handle "No results found"
- [ ] Debounced search (wait 500ms after typing stops)

#### 2. Movie Details (25 min)

- [ ] Click movie card → navigate to `/movie/:id`
- [ ] Fetch and display full details:
  - Poster (large)
  - Title, Year, Rated, Runtime
  - Genre, Director, Actors
  - Plot
  - IMDb Rating
  - Box Office (if available)
- [ ] "Back to results" button
- [ ] Loading spinner while fetching
- [ ] Error message if fetch fails

#### 3. Pagination (20 min)

- [ ] API returns 10 results per page
- [ ] Show "Load More" button or page numbers
- [ ] Display current page and total results
- [ ] Disable button when no more results
- [ ] Scroll to top on page change

#### 4. Watchlist (25 min)

- [ ] "Add to Watchlist" button on movie cards
- [ ] "Remove from Watchlist" button (toggle)
- [ ] Watchlist icon in header with count badge
- [ ] `/watchlist` route showing saved movies
- [ ] Persist watchlist in localStorage
- [ ] Works offline (uses cached data)

#### 5. Favorites (20 min)

- [ ] "Add to Favorites" heart icon
- [ ] Toggle favorite status
- [ ] `/favorites` route
- [ ] Persist in localStorage
- [ ] Display count in header

#### 6. Filters & Sorting (25 min)

- [ ] Filter by Type: All / Movies / Series / Episodes
- [ ] Filter by Year: dropdown with years (2024-1990)
- [ ] Apply filters to search results
- [ ] Clear filters button
- [ ] Filters persist in URL query params

#### 7. API Integration (30 min)

- [ ] Implement API service layer
- [ ] Use Redux Thunk or RTK Query for async actions
- [ ] Handle loading states (skeleton screens)
- [ ] Handle error states (user-friendly messages)
- [ ] Cache API responses (don't refetch same movie)
- [ ] Request timeout handling
- [ ] Rate limit handling (1000/day)

#### 8. State Management (25 min)

- [ ] Redux/Context setup with proper structure
- [ ] Reducers: `movies`, `filters`, `user` (watchlist/favorites)
- [ ] Actions: FETCH_MOVIES, SET_FILTER, ADD_TO_WATCHLIST, etc.
- [ ] Selectors for derived state (filtered movies, watchlist count)
- [ ] Persist user data (watchlist, favorites) to localStorage

#### 9. Routing (20 min)

- [ ] `/` - Home (trending/popular, or instructions to search)
- [ ] `/search` - Search results page
- [ ] `/movie/:imdbID` - Movie details
- [ ] `/watchlist` - Watchlist page
- [ ] `/favorites` - Favorites page
- [ ] `/404` - Not found page
- [ ] Active nav link highlighting

#### 10. UI/UX Polish (20 min)

- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Loading skeletons (not just spinners)
- [ ] Smooth transitions/animations
- [ ] Empty states (no results, empty watchlist)
- [ ] Toast notifications (added to watchlist, etc.)
- [ ] Accessible (keyboard navigation, ARIA labels)

---

## 📁 Provided Starter Structure

```
movie-database/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx          (TODO - movie card component)
│   │   ├── MovieGrid.jsx          (TODO - grid layout)
│   │   ├── SearchBar.jsx          (TODO - search input)
│   │   ├── FilterBar.jsx          (TODO - filters dropdown)
│   │   ├── Pagination.jsx         (TODO - pagination controls)
│   │   ├── Header.jsx             (SKELETON - nav + search)
│   │   ├── LoadingSkeleton.jsx    (PROVIDED - loading UI)
│   │   └── ErrorMessage.jsx       (PROVIDED - error display)
│   ├── pages/
│   │   ├── Home.jsx               (TODO - home page)
│   │   ├── SearchResults.jsx      (TODO - search results)
│   │   ├── MovieDetails.jsx       (TODO - detail page)
│   │   ├── Watchlist.jsx          (TODO - watchlist page)
│   │   ├── Favorites.jsx          (TODO - favorites page)
│   │   └── NotFound.jsx           (PROVIDED - 404)
│   ├── store/
│   │   ├── index.js               (SKELETON - Redux store setup)
│   │   ├── slices/
│   │   │   ├── moviesSlice.js     (TODO - movies reducer)
│   │   │   ├── filtersSlice.js    (TODO - filters reducer)
│   │   │   └── userSlice.js       (TODO - user data reducer)
│   │   └── selectors.js           (TODO - memoized selectors)
│   ├── services/
│   │   ├── api.js                 (SKELETON - API service)
│   │   └── localStorage.js        (PROVIDED - storage helpers)
│   ├── hooks/
│   │   ├── useDebounce.js         (PROVIDED - debounce hook)
│   │   └── useLocalStorage.js     (PROVIDED - localStorage hook)
│   ├── utils/
│   │   ├── constants.js           (PROVIDED - API constants)
│   │   └── helpers.js             (PROVIDED - utility functions)
│   ├── App.jsx                    (SKELETON - router setup)
│   ├── App.css                    (STARTER STYLES - enhance)
│   └── main.jsx                   (PROVIDED - Redux Provider)
├── .env.example                   (PROVIDED - template)
├── .gitignore                     (PROVIDED - includes .env)
└── README.md
```

---

## 🔌 API Documentation

### OMDb API Endpoints

Base URL: `http://www.omdbapi.com/`

#### 1. Search Movies

```javascript
GET /?apikey={API_KEY}&s={SEARCH_TERM}&page={PAGE}&type={TYPE}&y={YEAR}

// Example
http://www.omdbapi.com/?apikey=12345&s=avengers&page=1

// Response
{
  "Search": [
    {
      "Title": "The Avengers",
      "Year": "2012",
      "imdbID": "tt0848228",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "totalResults": "156",
  "Response": "True"
}
```

#### 2. Get Movie Details

```javascript
GET /?apikey={API_KEY}&i={IMDB_ID}&plot=full

// Example
http://www.omdbapi.com/?apikey=12345&i=tt0848228&plot=full

// Response
{
  "Title": "The Avengers",
  "Year": "2012",
  "Rated": "PG-13",
  "Released": "04 May 2012",
  "Runtime": "143 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Joss Whedon",
  "Actors": "Robert Downey Jr., Chris Evans...",
  "Plot": "Earth's mightiest heroes...",
  "Poster": "https://...",
  "imdbRating": "8.0",
  "imdbID": "tt0848228",
  "Response": "True"
}
```

#### Error Response

```javascript
{
  "Response": "False",
  "Error": "Movie not found!"
}
```

---

## 💡 Implementation Guide

### Redux State Structure

```javascript
{
  movies: {
    searchResults: [],
    movieDetails: {},      // Cache: { imdbID: movieData }
    loading: false,
    error: null,
    totalResults: 0,
    currentPage: 1
  },
  filters: {
    searchTerm: '',
    type: 'all',           // 'all' | 'movie' | 'series' | 'episode'
    year: 'all'            // 'all' | '2024' | '2023' ...
  },
  user: {
    watchlist: [],         // Array of imdbIDs
    favorites: []          // Array of imdbIDs
  }
}
```

### API Service Example

```javascript
// src/services/api.js
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (
  searchTerm,
  page = 1,
  type = "",
  year = "",
) => {
  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    page: page.toString(),
    ...(type && type !== "all" && { type }),
    ...(year && year !== "all" && { y: year }),
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};

export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`,
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};
```

### Redux Slice Example (RTK)

```javascript
// src/store/slices/moviesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "../../services/api";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page, type, year }) => {
    const data = await searchMovies(searchTerm, page, type, year);
    return data;
  },
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID) => {
    const data = await getMovieDetails(imdbID);
    return data;
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchResults: [],
    movieDetails: {},
    loading: false,
    error: null,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {
    clearSearch: (state) => {
      state.searchResults = [];
      state.totalResults = 0;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.Search || [];
        state.totalResults = parseInt(action.payload.totalResults) || 0;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails[action.payload.imdbID] = action.payload;
      });
  },
});

export const { clearSearch } = moviesSlice.actions;
export default moviesSlice.reducer;
```

---

## 🎨 UI Requirements

### Color Scheme (Dark Theme)

```css
--bg-primary: #141414;
--bg-secondary: #1f1f1f;
--bg-card: #2a2a2a;
--text-primary: #ffffff;
--text-secondary: #b3b3b3;
--accent: #e50914;
--accent-hover: #f40612;
```

### Layout

- Header: Fixed top, 60px height
- Main content: Max-width 1400px, centered
- Movie cards: 250px width on desktop
- Gap between cards: 20px

### Movie Card

```
┌─────────────────┐
│                 │
│     Poster      │
│   (350x500)     │
│                 │
├─────────────────┤
│ Title           │
│ Year • Type     │
│ [♥] [+]         │ (favorite, watchlist)
└─────────────────┘
```

### Responsive Breakpoints

- Mobile: ≤640px (1 column)
- Tablet: 641-1024px (2-3 columns)
- Desktop: ≥1025px (4-5 columns)

## 🎬 Live Demo

**[View Interactive Demo Wireframe](https://startappss-admin.github.io/assesment-30jan/demo-wireframe.html)**


---

## 🧪 Testing Checklist

### Search & Display

- [ ] Search returns results for valid query
- [ ] "No results" shows for invalid query
- [ ] Results display in grid
- [ ] Poster image loads (or shows placeholder)
- [ ] Debounce works (doesn't search on every keystroke)

### Navigation

- [ ] All routes load correctly
- [ ] Back button works
- [ ] Movie detail page loads from search
- [ ] Watchlist/Favorites pages accessible
- [ ] 404 page shows for invalid routes

### API Integration

- [ ] Loading state shows during fetch
- [ ] Error message shows if API fails
- [ ] No API key exposed in code (check .env)
- [ ] Handles API rate limiting gracefully
- [ ] Cached data doesn't refetch

### User Features

- [ ] Can add/remove from watchlist
- [ ] Can add/remove from favorites
- [ ] Watchlist persists after refresh
- [ ] Favorites persist after refresh
- [ ] Count badges update correctly

### Filters

- [ ] Type filter works (Movies/Series)
- [ ] Year filter works
- [ ] Filters combine correctly
- [ ] Clear filters resets everything
- [ ] Filters persist in URL

### Pagination

- [ ] Load More loads next page
- [ ] Results append to existing
- [ ] Button disables at end
- [ ] Page count updates

### Responsive

- [ ] Works on mobile (320px+)
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] Images scale properly
- [ ] Text doesn't overflow

---

## 🚀 Deployment to Vercel

### 1. Environment Variables

In Vercel Dashboard:

- Go to Project Settings → Environment Variables
- Add: `VITE_OMDB_API_KEY` with your API key
- Apply to: Production, Preview, Development

### 2. Deploy

**Via CLI:**

```bash
npm run build  # Test build locally
vercel --prod
```

**Via Dashboard:**

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable
4. Deploy

### 3. Verify

- Test search functionality
- Check browser console for errors
- Test on mobile device
- Verify API key is not exposed

---

## ✅ Submission Checklist

### Functionality

- [ ] Search works with real API
- [ ] Movie details page loads
- [ ] Watchlist adds/removes movies
- [ ] Favorites toggles correctly
- [ ] Filters apply to results
- [ ] Pagination loads more results
- [ ] All routes functional

### Code Quality

- [ ] Redux properly configured
- [ ] API service layer separated
- [ ] Components are reusable
- [ ] No console errors
- [ ] .env not committed
- [ ] Code is readable

### API Integration

- [ ] Loading states implemented
- [ ] Error handling works
- [ ] API responses cached
- [ ] No hardcoded API key
- [ ] Rate limiting handled

### UI/UX

- [ ] Responsive on all sizes
- [ ] Loading skeletons show
- [ ] Empty states handled
- [ ] Smooth animations
- [ ] Professional appearance

### Deployment

- [ ] Deployed to Vercel
- [ ] Environment variables set
- [ ] All features work live
- [ ] No console errors in production

---

## ⏱️ Time Management

**Recommended breakdown for 3 hours:**

- **API Setup & Service Layer** (20 min)
  - Get API key
  - Create `.env`
  - Implement API service functions
  - Test in browser console

- **Redux Store Setup** (25 min)
  - Configure store
  - Create slices (movies, filters, user)
  - Implement async thunks
  - Test with Redux DevTools

- **Routing & Basic Pages** (20 min)
  - Setup React Router
  - Create page components (skeleton)
  - Test navigation

- **Search Feature** (30 min)
  - SearchBar component
  - Debounced input
  - Connect to Redux
  - Display results

- **Movie Cards & Grid** (25 min)
  - MovieCard component
  - Grid layout
  - Responsive styling
  - Loading skeletons

- **Movie Details Page** (25 min)
  - Fetch movie by ID
  - Display full details
  - Back button
  - Loading/error states

- **Watchlist & Favorites** (25 min)
  - Add/remove logic
  - localStorage persistence
  - Dedicated pages
  - Count badges

- **Filters & Pagination** (20 min)
  - Filter dropdowns
  - Apply to search
  - Load more button

- **UI Polish** (15 min)
  - Responsive adjustments
  - Animations
  - Empty states

- **Testing & Deployment** (15 min)
  - Manual testing
  - Fix bugs
  - Deploy to Vercel

**Total:** 3 hours (180 min)

---

## 💡 Tips for Success

### Start Right

1. Get API key first (don't skip!)
2. Test API calls in browser/Postman
3. Setup Redux store before components
4. Build incrementally, test frequently

### API Best Practices

- Always check `data.Response === "True"`
- Handle "Movie not found!" error
- Don't fetch same movie twice (cache it)
- Show user-friendly error messages

### Common Pitfalls

- ❌ Committing `.env` file
- ❌ Not handling API errors
- ❌ Fetching on every keystroke (use debounce)
- ❌ Not showing loading states
- ❌ Hardcoding API key

### Debugging

- Check Redux DevTools for state
- Check Network tab for API calls
- Console.log API responses
- Test with known movie IDs (tt0848228 = Avengers)

---

## 📚 Resources

- [OMDb API Docs](http://www.omdbapi.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Deployment](https://vercel.com/docs)

---

Good luck! 🎬🍿

**Time Limit:** 3 hours
