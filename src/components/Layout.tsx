import React from 'react';
import { 
  LayoutDashboard, 
  QrCode, 
  BarChart3, 
  Users, 
  Bell, 
  Menu,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Page } from '@/src/types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mark-attendance', label: 'Mark Attendance', icon: QrCode },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'participants', label: 'Participants', icon: Users },
  ] as const;

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col h-screen w-72 sticky left-0 top-0 bg-surface-container border-r border-outline-variant/15 py-8 shrink-0">
        <div className="px-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-primary font-headline">The Ledger</p>
              <p className="text-xs text-on-surface-variant font-medium">Lead Curator</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1 pr-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-6 py-3 rounded-r-full font-headline text-sm transition-all duration-300 ease-in-out text-left",
                currentPage === item.id 
                  ? "bg-surface-container-highest text-primary font-bold" 
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="px-6 mt-auto">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc04Pxap4t8mNwQRpCQh2_VweKmvzY_IosIHIrvHeduKkp--Sv2XzcNDbYB2dvkHvSj6S1bf-mPdWC4R6bYYSxL-zeRPSqGzmhXo4Yj5Fu_Ka5VaaNADB712R8KuQyVNQZBtZXzqiAZchrcrkbvahskkL4Ujkk8CJvMT7Ix93sps9jiH8DWFoB6cfumJJwhOQM7WgJxydwQB-_wiX7cpEf3ub4grXSeA_NqLf9ZYKdvFVM6YoK5lO3KPEWDma3mF0Xx-ZNtbNBMC4" 
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-outline-variant/20"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm font-bold text-primary">Principal Office</p>
              <p className="text-xs text-on-surface-variant">Lead Curator</p>
            </div>
          </div>
          <p className="text-[10px] text-on-surface-variant/50 font-medium tracking-widest">v1.0.4</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="w-full sticky top-0 bg-surface-container/80 backdrop-blur-md z-40 border-b border-outline-variant/5">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-primary p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-extrabold text-primary tracking-tight font-headline md:hidden">The Ledger</h1>
              <h1 className="text-2xl font-extrabold text-primary tracking-tight font-headline hidden md:block">
                {navItems.find(i => i.id === currentPage)?.label}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <Bell size={24} />
              </button>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/10 md:hidden">
                <img 
                  className="h-full w-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc04Pxap4t8mNwQRpCQh2_VweKmvzY_IosIHIrvHeduKkp--Sv2XzcNDbYB2dvkHvSj6S1bf-mPdWC4R6bYYSxL-zeRPSqGzmhXo4Yj5Fu_Ka5VaaNADB712R8KuQyVNQZBtZXzqiAZchrcrkbvahskkL4Ujkk8CJvMT7Ix93sps9jiH8DWFoB6cfumJJwhOQM7WgJxydwQB-_wiX7cpEf3ub4grXSeA_NqLf9ZYKdvFVM6YoK5lO3KPEWDma3mF0Xx-ZNtbNBMC4"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>

        {/* Bottom Nav (Mobile) */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 md:hidden glass-nav rounded-t-3xl shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center p-3 transition-all duration-300",
                currentPage === item.id 
                  ? "bg-primary text-white rounded-2xl -translate-y-2 shadow-lg" 
                  : "text-on-surface-variant/60"
              )}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">{item.id.split('-')[0]}</span>
            </button>
          ))}
        </nav>

        {/* FAB */}
        <button className="fixed bottom-24 right-6 md:bottom-12 md:right-12 w-16 h-16 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center active:scale-95 transition-transform z-30 group">
          <Plus size={32} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
