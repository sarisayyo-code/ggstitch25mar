import { Search, QrCode, ChevronRight } from 'lucide-react';
import { Participant } from '@/src/types';
import { cn } from '@/src/lib/utils';

const roster: Participant[] = [
  {
    id: '1',
    name: 'Alexander Vance',
    role: 'Student',
    studentId: '#29481',
    email: '',
    phone: '',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    status: 'none'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Student',
    studentId: '#29485',
    email: '',
    phone: '',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    status: 'none'
  },
  {
    id: '3',
    name: 'Julian Thorne',
    role: 'Student',
    studentId: '#29490',
    email: '',
    phone: '',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    status: 'none'
  },
  {
    id: '4',
    name: 'Maya Sterling',
    role: 'Student',
    studentId: '#29502',
    email: '',
    phone: '',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200',
    status: 'none'
  }
];

export default function MarkAttendance() {
  return (
    <div className="min-h-screen pb-32">
      {/* Header / Search */}
      <section className="px-6 pt-8 pb-4">
        <h2 className="font-headline font-extrabold text-4xl mb-6 tracking-tight text-on-surface">Mark Attendance</h2>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-on-surface-variant/40" size={20} />
          </div>
          <input 
            className="w-full py-4 pl-12 pr-4 bg-surface-container-lowest border border-outline-variant/15 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg shadow-sm" 
            placeholder="Search participants..." 
            type="text"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-primary p-6 rounded-[2rem] text-white flex items-center justify-between group cursor-pointer active:scale-95 transition-transform">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <QrCode size={24} />
            </div>
            <div>
              <p className="font-headline font-bold text-lg">Scan QR Code</p>
              <p className="text-white/70 text-sm">Quick check-in via camera</p>
            </div>
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="bg-surface-container-low p-6 rounded-[2rem] flex items-center justify-around border border-outline-variant/10">
          <div className="text-center px-4 border-r border-outline-variant/20">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Total</p>
            <p className="font-headline font-bold text-2xl">124</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Present</p>
            <p className="font-headline font-bold text-2xl text-primary">82</p>
          </div>
          <div className="text-center px-4 border-l border-outline-variant/20">
            <p className="text-xs font-bold uppercase tracking-widest text-on-error-container mb-1">Absent</p>
            <p className="font-headline font-bold text-2xl text-on-error-container">12</p>
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="px-6 space-y-4">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-headline font-bold text-xl text-on-surface-variant">Class Roster</h3>
          <span className="text-sm font-bold text-on-surface-variant/40 uppercase tracking-wider">Group A • morning</span>
        </div>

        {roster.map((p) => (
          <div key={p.id} className="bg-surface-container-lowest p-5 rounded-[2rem] border border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-surface-container-high">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover" 
                  src={p.photo} 
                  alt={p.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface">{p.name}</h4>
                <p className="text-sm text-on-surface-variant/60">Student ID: {p.studentId}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex-1 sm:flex-none px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-primary/10 text-primary hover:bg-primary hover:text-white active:scale-95">
                Present
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-on-surface-variant/60 border border-outline-variant/30 hover:bg-tertiary-fixed hover:text-on-tertiary-fixed">
                Late
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-on-surface-variant/60 border border-outline-variant/30 hover:bg-error-container hover:text-on-error-container">
                Absent
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
