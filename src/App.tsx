import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/hooks/use-auth';
import Index from './pages/Index';
import Events from './pages/Events';
import Announcements from './pages/Announcements';
import CalendarPage from './pages/CalendarPage';
import Donation from './pages/Donation';
import Invitation from './pages/Invitation';
import InviteLanding from './pages/InviteLanding';
import AdminDashboard from './pages/AdminDashboard';
import AdminGuests from './pages/AdminGuests';
import GuestList from './pages/GuestList';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import WhatsAppPopup from './components/WhatsAppPopup';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div className="min-h-screen bg-cream flex items-center justify-center"><div className="text-brown/50">Loading...</div></div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <WhatsAppPopup />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/invite/:guestId" element={<InviteLanding />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/guests" element={<ProtectedRoute><AdminGuests /></ProtectedRoute>} />
            <Route path="/guests" element={<GuestList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
