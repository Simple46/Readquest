export default function LibraryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-brown-dark mb-2">
        Library
      </h1>
      <p className="text-brown-light mb-8">Discover your next great read.</p>

      {/* Placeholder for book grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-cream-dark rounded-xl p-4 shadow-book">
            <div className="aspect-[3/4] bg-cream-darker rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">📖</span>
            </div>
            <h3 className="font-serif font-semibold text-brown-dark">
              Book Title {i}
            </h3>
            <p className="text-sm text-brown-muted">Author Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}
