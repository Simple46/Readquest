import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-cream-dark rounded-2xl p-8 shadow-book">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-brown-dark mb-2">
            Welcome Back
          </h1>
          <p className="text-brown-light">
            Sign in to continue your reading quest.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brown mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-cream rounded-lg border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brown mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-cream rounded-lg border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber text-white font-semibold rounded-lg hover:bg-amber-dark transition-colors shadow-book"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-brown-muted">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-amber hover:text-amber-dark font-medium"
          >
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}
