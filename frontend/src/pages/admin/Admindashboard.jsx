export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-brown-dark mb-6">
        Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-cream-dark rounded-xl p-6 shadow-book">
          <p className="text-sm text-brown-muted mb-1">Total Books</p>
          <p className="text-3xl font-bold text-brown-dark">0</p>
        </div>
        <div className="bg-cream-dark rounded-xl p-6 shadow-book">
          <p className="text-sm text-brown-muted mb-1">Total Users</p>
          <p className="text-3xl font-bold text-amber">0</p>
        </div>
        <div className="bg-cream-dark rounded-xl p-6 shadow-book">
          <p className="text-sm text-brown-muted mb-1">Pages Read Today</p>
          <p className="text-3xl font-bold text-brown-dark">0</p>
        </div>
        <div className="bg-cream-dark rounded-xl p-6 shadow-book">
          <p className="text-sm text-brown-muted mb-1">Active Streaks</p>
          <p className="text-3xl font-bold text-amber">0</p>
        </div>
      </div>
    </div>
  );
}
