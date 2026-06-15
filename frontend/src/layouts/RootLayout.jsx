import { Outlet, Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BookOpen, Trophy, User, LogOut, Menu, X, Flame } from "lucide-react";
import { useState } from "react";

export default function RootLayout() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-cream-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-amber rounded-xl flex items-center justify-center shadow-book group-hover:shadow-glow transition-all">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-brown-dark tracking-tight">
                ReadQuest
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/library"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-glow text-amber-dark"
                      : "text-brown-light hover:text-brown hover:bg-cream-darker"
                  }`
                }
              >
                <BookOpen className="w-4 h-4" />
                Library
              </NavLink>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-glow text-amber-dark"
                      : "text-brown-light hover:text-brown hover:bg-cream-darker"
                  }`
                }
              >
                <Trophy className="w-4 h-4" />
                Leaderboard
              </NavLink>
              {user && (
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-amber-glow text-amber-dark"
                        : "text-brown-light hover:text-brown hover:bg-cream-darker"
                    }`
                  }
                >
                  <User className="w-4 h-4" />
                  Profile
                </NavLink>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-glow rounded-lg">
                    <Flame className="w-4 h-4 text-amber" />
                    <span className="text-sm font-semibold text-amber-dark">
                      {user.xp} XP
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-brown-light hover:text-danger transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-brown-light hover:text-brown transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-5 py-2.5 text-sm font-semibold bg-amber text-white rounded-xl hover:bg-amber-dark transition-all shadow-book hover:shadow-glow"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-brown-light hover:text-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-dark border-t border-cream-darker px-4 py-4 space-y-2">
            <Link
              to="/library"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-brown-light hover:bg-cream-darker"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="w-4 h-4" /> Library
            </Link>
            <Link
              to="/leaderboard"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-brown-light hover:bg-cream-darker"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Trophy className="w-4 h-4" /> Leaderboard
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-brown-light hover:bg-cream-darker"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-danger w-full"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-brown-light hover:bg-cream-darker"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cream-dark border-t border-cream-darker mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-brown-dark block">
                  ReadQuest
                </span>
                <span className="text-xs text-brown-muted">
                  Build your reading habit
                </span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-brown-muted">
              <Link
                to="/library"
                className="hover:text-brown transition-colors"
              >
                Library
              </Link>
              <Link
                to="/leaderboard"
                className="hover:text-brown transition-colors"
              >
                Leaderboard
              </Link>
              <Link
                to="/profile"
                className="hover:text-brown transition-colors"
              >
                Profile
              </Link>
            </div>
            <p className="text-xs text-brown-muted">
              © {new Date().getFullYear()} ReadQuest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
