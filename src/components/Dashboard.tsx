import { 
  QrCode, 
  UserCheck, 
  UserMinus, 
  FlaskConical, 
  History, 
  Brain, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { Session } from '@/src/types';

const sessions: Session[] = [
  {
    id: '1',
    title: 'Advanced Biochemistry Lab',
    sessionId: '#BCL-902',
    time: '10:15 AM',
    status: 'completed',
    attendance: '94% Attendance',
    icon: 'science'
  },
  {
    id: '2',
    title: 'Modern History 101',
    sessionId: '#MH-441',
    time: '08:30 AM',
    status: 'completed',
    attendance: '88% Attendance',
    icon: 'history_edu'
  },
  {
    id: '3',
    title: 'Cognitive Psychology',
    sessionId: '#CP-112',
    time: '11:45 AM',
    status: 'live',
    attendance: 'Scanning...',
    icon: 'psychology'
  }
];

export default function Dashboard() {
  return (
    <div className="px-4 md:px-12 py-8 space-y-12">
      {/* Hero Section */}
      <section>
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Curator's Overview</h2>
        <p className="text-on-surface-variant">Real-time attendance intelligence for today's active sessions.</p>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main CTA Card */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-white flex flex-col justify-between min-h-[220px]">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-headline mb-2">Initialize Session</h3>
            <p className="text-primary-fixed-dim text-sm max-w-[240px]">Launch a new attendance tracking sequence with instant verification.</p>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary-fixed transition-colors active:scale-95 duration-200">
              <QrCode size={18} /> Start Taking Attendance
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
        </div>

        {/* Stat: Present */}
        <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 flex flex-col justify-between border border-outline-variant/15">
          <div className="flex justify-between items-start">
            <div className="bg-surface-container-high text-primary p-3 rounded-2xl">
              <UserCheck size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest text-primary-fixed-dim uppercase">Active</span>
          </div>
          <div>
            <p className="text-4xl font-black font-headline text-on-surface">1,284</p>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mt-1">Present Today</p>
          </div>
        </div>

        {/* Stat: Absent */}
        <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 flex flex-col justify-between border border-outline-variant/15">
          <div className="flex justify-between items-start">
            <div className="bg-error-container text-on-error-container p-3 rounded-2xl">
              <UserMinus size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest text-on-error-container uppercase">Alert</span>
          </div>
          <div>
            <p className="text-4xl font-black font-headline text-on-surface">42</p>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mt-1">Absent</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sessions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-headline text-on-surface">Recent Sessions</h3>
            <button className="text-primary font-bold text-sm hover:underline">View History</button>
          </div>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div 
                key={session.id}
                className={`group bg-surface-container-lowest hover:bg-surface-container-high transition-all duration-300 p-4 rounded-3xl flex items-center justify-between border-l-4 ${session.status === 'live' ? 'border-primary' : 'border-transparent'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${session.status === 'live' ? 'bg-primary-fixed-dim text-primary' : 'bg-surface-container text-primary'}`}>
                    {session.icon === 'science' && <FlaskConical size={20} />}
                    {session.icon === 'history_edu' && <History size={20} />}
                    {session.icon === 'psychology' && <Brain size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{session.title}</h4>
                    <p className="text-sm text-on-surface-variant/60">Session ID: {session.sessionId} • {session.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className={`text-sm font-bold ${session.status === 'live' ? 'text-primary animate-pulse' : 'text-on-surface'}`}>
                      {session.attendance}
                    </p>
                    <p className="text-xs text-on-surface-variant/40">{session.status === 'live' ? 'Active now' : 'Target reached'}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${session.status === 'live' ? 'bg-primary text-white' : 'bg-surface-container-high text-primary'}`}>
                    {session.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trends & Status */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-headline text-on-surface">Attendance Trends</h3>
          <div className="bg-surface-container p-6 rounded-[2rem]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-on-surface-variant">Late Arrivals</p>
              <span className="text-xs font-bold text-on-tertiary-fixed bg-tertiary-fixed px-2 py-0.5 rounded-full">+12%</span>
            </div>
            <p className="text-3xl font-black font-headline text-on-surface">18</p>
            <div className="mt-4 flex gap-1 h-2 w-full bg-white/50 rounded-full overflow-hidden">
              <div className="bg-primary w-[70%]" title="Present"></div>
              <div className="bg-tertiary-fixed w-[15%]" title="Late"></div>
              <div className="bg-error-container w-[15%]" title="Absent"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant/40 mt-2 font-medium uppercase tracking-widest">Distribution of today's record</p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/15 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Peak Hour</p>
              <p className="text-lg font-bold text-on-surface">09:15 AM</p>
              <p className="text-xs text-on-surface-variant/40">Highest density of check-ins</p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden relative h-48 group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Institution Status"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <p className="text-white font-bold font-headline">Institution Status</p>
              <p className="text-white/70 text-xs">All terminals operational</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
