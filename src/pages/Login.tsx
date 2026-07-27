import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { LogIn, AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gold/60 p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-5xl font-serif text-saffron mb-2">ॐ</div>
            <h1 className="font-serif text-2xl text-brown">Admin Login</h1>
            <p className="text-xs font-sans text-brown/50 mt-1">Santani Chaturmas Management</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-3 mb-6 text-sm font-sans text-red-700">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@santani.com"
                required
                className="w-full border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin123"
                required
                className="w-full border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-saffron text-white py-3 font-sans font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors duration-150 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <LogIn size={16} />
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gold/20 text-center">
            <p className="text-xs font-sans text-brown/40">
              Demo: admin@santani.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
