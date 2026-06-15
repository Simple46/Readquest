import { Outlet, Link, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream-dark/80 backdrop-blur-md border-b border-cream-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">
                  R
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-brown-dark">
                ReadQuest
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/library"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-glow text-amber-dark"
                      : "text-brown-light hover:text-brown hover:bg-cream-darker"
                  }`
                }
              >
                Library
              </NavLink>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-glow text-amber-dark"
                      : "text-brown-light hover:text-brown hover:bg-cream-darker"
                  }`
                }
              >
                Leaderboard
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-glow text-amber-dark"
                      : "text-brown-light hover:text-brown hover:bg-cream-darker"
                  }`
                }
              >
                Profile
              </NavLink>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-brown-light hover:text-brown transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium bg-amber text-white rounded-lg hover:bg-amber-dark transition-colors shadow-book"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cream-dark border-t border-cream-darker mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber rounded flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xs">
                  R
                </span>
              </div>
              <span className="font-serif text-sm font-semibold text-brown">
                ReadQuest
              </span>
            </div>
            <p className="text-sm text-brown-muted">
              Build your reading habit, one quest at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
