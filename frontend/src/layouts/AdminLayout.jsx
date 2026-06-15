import { Outlet, Link, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Admin Header */}
      <header className="bg-brown-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">
                  R
                </span>
              </div>
              <span className="font-serif text-xl font-bold">Admin Panel</span>
            </Link>

            <div className="flex items-center gap-4">
              <NavLink
                to="/admin/books"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-amber-light" : "text-cream-dark hover:text-white"}`
                }
              >
                Books
              </NavLink>
              <NavLink
                to="/admin/upload"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-amber-light" : "text-cream-dark hover:text-white"}`
                }
              >
                Upload
              </NavLink>
              <Link to="/" className="text-sm text-cream-dark hover:text-white">
                Exit Admin
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
