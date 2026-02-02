import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export default function Header() {

  const favorites = useSelector((state) => state.user.favorites);
  const watchlist = useSelector((state) => state.user.watchlist);

  return (
    <header className="header">
      <div className="nav-container">
        <SearchBar />
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/favorites">
            Favorites ({favorites.length})
          </Link>
          <Link to="/watchlist">
            Watchlist ({watchlist.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}
