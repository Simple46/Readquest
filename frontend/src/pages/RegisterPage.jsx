import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  BookOpen,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Gift,
  ArrowRight,
  Loader2,
  Check,
} from "lucide-react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setError("Please agree to the terms");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await register(email, password, fullName, referralCode || undefined);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-cream-dark rounded-2xl p-8 shadow-book border border-cream-darker">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-amber-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-amber" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-brown-dark mb-2">
              Start Your Quest
            </h1>
            <p className="text-brown-light text-sm">
              Join thousands building their reading habit
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-glow rounded-full">
              <Gift className="w-4 h-4 text-amber" />
              <span className="text-xs font-semibold text-amber-dark">
                Earn 50 XP on signup
              </span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-brown mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-muted" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream rounded-xl border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all text-brown-dark placeholder:text-brown-muted/50"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-brown mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream rounded-xl border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all text-brown-dark placeholder:text-brown-muted/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-brown mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-cream rounded-xl border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all text-brown-dark placeholder:text-brown-muted/50"
                  placeholder="Min. 8 characters"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brown-muted hover:text-brown transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-brown-muted">
                Must be at least 8 characters
              </p>
            </div>

            {/* Referral Code (Optional) */}
            <div>
              <label className="block text-sm font-medium text-brown mb-1.5">
                Referral Code{" "}
                <span className="text-brown-muted font-normal">(optional)</span>
              </label>
              <div className="relative">
                <Gift className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-muted" />
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) =>
                    setReferralCode(e.target.value.toUpperCase())
                  }
                  className="w-full pl-10 pr-4 py-3 bg-cream rounded-xl border border-cream-darker focus:border-amber focus:ring-2 focus:ring-amber-glow outline-none transition-all text-brown-dark placeholder:text-brown-muted/50 uppercase"
                  placeholder="RQ-XXXXXX"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-cream-darker rounded-md peer-checked:bg-amber peer-checked:border-amber transition-all flex items-center justify-center">
                  {agreed && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              <span className="text-sm text-brown-light leading-tight">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-amber hover:text-amber-dark underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-amber hover:text-amber-dark underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-amber text-white font-semibold rounded-xl hover:bg-amber-dark transition-all shadow-book hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-sm text-brown-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber hover:text-amber-dark font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
