import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-paper-texture opacity-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-glow rounded-full mb-6">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amber-dark">
              Now in Beta
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brown-dark mb-6 leading-tight">
            Turn Reading Into a{" "}
            <span className="text-gradient-amber">Quest</span>
          </h1>

          <p className="text-lg sm:text-xl text-brown-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Build a consistent reading habit. Earn XP, unlock achievements,
            compete on leaderboards, and discover your next favorite book.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-amber text-white font-semibold rounded-xl hover:bg-amber-dark transition-all shadow-book hover:shadow-glow"
            >
              Start Your Quest
            </Link>
            <Link
              to="/library"
              className="px-8 py-4 bg-cream-dark text-brown font-semibold rounded-xl border border-cream-darker hover:bg-cream-darker transition-all"
            >
              Browse Library
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brown-dark">10K+</div>
              <div className="text-sm text-brown-muted mt-1">Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">5K+</div>
              <div className="text-sm text-brown-muted mt-1">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brown-dark">1M+</div>
              <div className="text-sm text-brown-muted mt-1">Pages Read</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-brown-dark text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-2xl p-8 shadow-book hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-amber-glow rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-dark mb-2">
                Pick a Book
              </h3>
              <p className="text-brown-light">
                Browse our curated library across categories from
                self-development to fiction.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-book hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-amber-glow rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-dark mb-2">
                Earn XP
              </h3>
              <p className="text-brown-light">
                Get rewarded for every page, chapter, and book you complete.
                Track your streaks.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-book hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-amber-glow rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-dark mb-2">
                Climb the Ranks
              </h3>
              <p className="text-brown-light">
                Compete on global, weekly, and monthly leaderboards. Show off
                your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
