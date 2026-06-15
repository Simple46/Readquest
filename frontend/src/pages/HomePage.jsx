import { Link } from "react-router-dom";
import {
  BookOpen,
  Trophy,
  Zap,
  Users,
  Star,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const categories = [
    { name: "Self Development", icon: Star, count: "120+" },
    { name: "Technology", icon: Zap, count: "85+" },
    { name: "Business", icon: Trophy, count: "95+" },
    { name: "Fiction", icon: BookOpen, count: "200+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-glow/30 rounded-l-[100px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-darker rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-glow rounded-full mb-6 border border-amber/20">
                <Zap className="w-4 h-4 text-amber" />
                <span className="text-sm font-semibold text-amber-dark">
                  Now in Beta — Join 5,000+ Readers
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brown-dark mb-6 leading-[1.1]">
                Turn Reading Into a{" "}
                <span className="relative">
                  <span className="text-gradient-amber">Quest</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="#D97706"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-brown-light mb-8 leading-relaxed max-w-lg">
                Build a consistent reading habit with gamified tracking. Earn
                XP, unlock achievements, compete on leaderboards, and discover
                your next favorite book.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="group px-8 py-4 bg-amber text-white font-semibold rounded-xl hover:bg-amber-dark transition-all shadow-book hover:shadow-glow flex items-center justify-center gap-2"
                >
                  Start Your Quest
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/library"
                  className="px-8 py-4 bg-cream-dark text-brown font-semibold rounded-xl border border-cream-darker hover:bg-cream-darker transition-all flex items-center justify-center gap-2"
                >
                  Browse Library
                  <BookOpen className="w-4 h-4" />
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-cream-darker border-2 border-cream flex items-center justify-center text-xs font-bold text-brown-muted"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-brown-light">
                  <span className="font-semibold text-brown-dark">5,000+</span>{" "}
                  readers joined this month
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-cream-dark rounded-3xl p-6 shadow-book border border-cream-darker">
                {/* Mock book card */}
                <div className="bg-cream rounded-2xl p-5 shadow-sm mb-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-amber/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-amber" />
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-brown-dark/10 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-brown-muted/10 rounded w-1/2 mb-3" />
                      <div className="flex items-center gap-2">
                        <div className="h-2 bg-amber rounded-full w-2/3" />
                        <span className="text-xs text-brown-muted">67%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* XP notification */}
                <div className="bg-amber-glow rounded-xl p-4 flex items-center gap-3 border border-amber/20">
                  <div className="w-10 h-10 bg-amber rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-dark">
                      +25 XP Earned!
                    </p>
                    <p className="text-xs text-brown-muted">
                      Completed Chapter 4
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-cream rounded-xl p-3 shadow-book border border-cream-darker">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber" />
                    <div>
                      <p className="text-xs font-bold text-brown-dark">#12</p>
                      <p className="text-[10px] text-brown-muted">
                        Global Rank
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-cream-darker rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brown-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">10K+</div>
              <div className="text-sm text-cream-dark mt-1">
                Books Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">5K+</div>
              <div className="text-sm text-cream-dark mt-1">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">1M+</div>
              <div className="text-sm text-cream-dark mt-1">Pages Read</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">50K+</div>
              <div className="text-sm text-cream-dark mt-1">XP Earned</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brown-dark mb-4">
              How ReadQuest Works
            </h2>
            <p className="text-brown-light max-w-2xl mx-auto">
              Three simple steps to transform your reading habit into an
              adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BookOpen,
                title: "Pick a Book",
                desc: "Browse our curated library across categories from self-development to fiction. Filter by difficulty and estimated reading time.",
                color: "bg-amber",
              },
              {
                step: "02",
                icon: Zap,
                title: "Earn XP",
                desc: "Get rewarded for every page, chapter, and book you complete. Track your streaks and watch your XP grow in real-time.",
                color: "bg-brown",
              },
              {
                step: "03",
                icon: Trophy,
                title: "Climb the Ranks",
                desc: "Compete on global, weekly, and monthly leaderboards. Unlock achievements and show off your reading prowess.",
                color: "bg-amber-dark",
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="absolute -top-4 -left-2 text-7xl font-serif font-bold text-cream-darker/50 select-none">
                  {item.step}
                </div>
                <div className="relative bg-cream-dark rounded-2xl p-8 shadow-book hover:shadow-glow transition-all border border-cream-darker group-hover:border-amber/30">
                  <div
                    className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-book`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brown-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brown-light leading-relaxed">
                    {item.desc}
                  </p>
                  <ChevronRight className="w-5 h-5 text-amber mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brown-dark mb-2">
                Explore Categories
              </h2>
              <p className="text-brown-light">
                Find books that match your interests and goals
              </p>
            </div>
            <Link
              to="/library"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-amber hover:text-amber-dark transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/library?category=${cat.name.toLowerCase().replace(" ", "-")}`}
                className="group bg-cream rounded-2xl p-6 shadow-book hover:shadow-glow transition-all border border-cream-darker hover:border-amber/30"
              >
                <div className="w-12 h-12 bg-amber-glow rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6 text-amber group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brown-dark mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-brown-muted">{cat.count} books</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-brown-dark rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <Users className="w-12 h-12 text-amber mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-4">
                Ready to Start Your Reading Quest?
              </h2>
              <p className="text-cream-dark mb-8 max-w-lg mx-auto">
                Join thousands of readers who have transformed their habits.
                Earn your first 50 XP today.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white font-semibold rounded-xl hover:bg-amber-light transition-all shadow-book"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
