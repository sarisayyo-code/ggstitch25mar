import { Mail, Phone, Search, UserPlus, Edit2, Trash2, PlusCircle } from 'lucide-react';
import { Participant } from '@/src/types';
import { cn } from '@/src/lib/utils';

const participants: Participant[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    role: 'Graduate Research Fellow',
    studentId: '2409-ER-77',
    email: 'elena.r@university.edu',
    phone: '+1 (555) 012-3456',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    status: 'present'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Senior Lab Assistant',
    studentId: '2409-MT-12',
    email: 'm.thorne@lab.org',
    phone: '+1 (555) 987-6543',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    status: 'absent'
  },
  {
    id: '3',
    name: 'Dr. Sarah Chen',
    role: 'Department Head',
    studentId: '2409-SC-01',
    email: 's.chen@faculty.edu',
    phone: '+1 (555) 234-5678',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    status: 'late'
  },
  {
    id: '4',
    name: 'Julian Vance',
    role: 'Visual Arts Student',
    studentId: '2409-JV-44',
    email: 'vance.j@arts.edu',
    phone: '+1 (555) 456-7890',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    status: 'present'
  },
  {
    id: '5',
    name: 'Aisha Patel',
    role: 'Clinical Psychology',
    studentId: '2409-AP-92',
    email: 'aisha.p@med.org',
    phone: '+1 (555) 321-0987',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    status: 'present'
  }
];

export default function Participants() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between overflow-hidden relative group">
          <div className="z-10">
            <h3 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Curate Your Ledger</h3>
            <p className="text-on-surface-variant max-w-md leading-relaxed">Manage students and faculty members with precision. Every record is a vital thread in the institutional fabric.</p>
          </div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
        </div>
        
        <div className="bg-primary p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-center items-center text-center text-white">
          <UserPlus size={40} className="mb-4" />
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold tracking-tight hover:scale-105 transition-transform active:scale-95">
            Add Participant
          </button>
          <p className="text-primary-fixed-dim text-xs mt-4 uppercase tracking-widest font-semibold">New Student or Staff</p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={20} />
          <input 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-2xl focus:ring-2 focus:ring-primary shadow-sm text-sm outline-none" 
            placeholder="Search by name, ID or email..." 
            type="text"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap">All</button>
          <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-semibold hover:bg-surface-container-high whitespace-nowrap">Students</button>
          <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-semibold hover:bg-surface-container-high whitespace-nowrap">Faculty</button>
          <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-semibold hover:bg-surface-container-high whitespace-nowrap">Staff</button>
        </div>
      </section>

      {/* Participant Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {participants.map((p) => (
          <div key={p.id} className="bg-surface-container-lowest p-6 rounded-[2.5rem] group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={p.photo} 
                  alt={p.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-headline font-bold text-lg text-primary">{p.name}</h4>
                  <span className={cn(
                    "px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full",
                    p.status === 'present' && "bg-primary/10 text-primary",
                    p.status === 'late' && "bg-tertiary-fixed text-on-tertiary-fixed",
                    p.status === 'absent' && "bg-error-container text-on-error-container"
                  )}>
                    {p.status}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium">{p.role}</p>
                <p className="text-on-surface-variant/40 text-xs mt-1">ID: {p.studentId}</p>
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-outline-variant/15">
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <Mail size={14} /> {p.email}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <Phone size={14} /> {p.phone}
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-primary hover:bg-surface-container rounded-full"><Edit2 size={18} /></button>
              <button className="p-2 text-on-error-container hover:bg-error-container rounded-full"><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
        
        {/* Add Participant Placeholder */}
        <div className="border-2 border-dashed border-outline-variant/30 p-6 rounded-[2.5rem] flex flex-col items-center justify-center text-on-surface-variant/40 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer group">
          <PlusCircle size={40} className="mb-2 group-hover:scale-110 transition-transform" />
          <p className="font-headline font-bold text-sm tracking-tight">Add New Member</p>
        </div>
      </section>
    </div>
  );
}
