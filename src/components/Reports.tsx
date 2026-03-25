import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Calendar, ChevronLeft, ChevronRight, Download, FileDown, Filter, MoreVertical, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const data = [
  { name: 'MON', value: 60 },
  { name: 'TUE', value: 85 },
  { name: 'WED', value: 95 },
  { name: 'THU', value: 70 },
  { name: 'FRI', value: 90 },
  { name: 'SAT', value: 30 },
];

const records = [
  { id: '#44921', name: 'Adrian Miller', initial: 'AM', group: 'Senior Design Lab A', module: 'UI Patterns', time: 'Oct 19, 09:04 AM', status: 'Present' },
  { id: '#44908', name: 'Sarah Jenkins', initial: 'SK', group: 'Senior Design Lab A', module: 'UI Patterns', time: 'Oct 19, 09:15 AM', status: 'Late' },
  { id: '#44899', name: 'Blake Wallace', initial: 'BW', group: 'Senior Design Lab A', module: 'UI Patterns', time: '-', status: 'Absent' },
  { id: '#44872', name: 'Elena Lopez', initial: 'EL', group: 'Senior Design Lab A', module: 'UI Patterns', time: 'Oct 19, 08:58 AM', status: 'Present' },
];

export default function Reports() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
      {/* Filters */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 px-1">Date Range</label>
            <div className="relative">
              <input 
                className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" 
                type="text" 
                defaultValue="Oct 12 - Oct 19, 2023"
              />
              <Calendar className="absolute right-4 top-3 text-on-surface-variant/40" size={20} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 px-1">Group / Class</label>
            <select className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
              <option>Senior Design Lab A</option>
              <option>Marketing Theory 101</option>
              <option>Advanced Calculus</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 px-1">Status Type</label>
            <select className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
              <option>All Records</option>
              <option>Present Only</option>
              <option>Absences Only</option>
            </select>
          </div>
        </div>
        <div className="lg:col-span-4 flex gap-3">
          <button className="flex-1 bg-surface-container-high text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-surface-container-highest transition-colors active:scale-95">
            Clear Filters
          </button>
          <button className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-95 transition-all active:scale-95">
            Apply
          </button>
        </div>
      </section>

      {/* Analytics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest rounded-[2.5rem] p-8 flex flex-col gap-6 ring-1 ring-outline-variant/15">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-primary font-headline">Weekly Attendance Volume</h3>
              <p className="text-sm text-on-surface-variant/60">Average retention rate: 94.2%</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs bg-primary/5 px-3 py-1 rounded-full">
              <TrendingUp size={14} />
              +2.4% vs last week
            </div>
          </div>
          
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'WED' ? '#00346f' : '#ededf5'} />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                  dy={10}
                />
                <Tooltip cursor={{ fill: 'transparent' }} content={() => null} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1 bg-primary text-white rounded-[2.5rem] p-8 flex flex-col justify-between ring-1 ring-primary/20 relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-80">Absence Density</h3>
            <p className="text-4xl font-black mt-2 font-headline">5.8%</p>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 mt-6">
            <p className="text-[11px] leading-relaxed opacity-90">
              Most absences occur during <span className="font-bold underline">Friday afternoon</span> sessions. Consider rescheduling core modules.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Historical Ledger */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary font-headline">Historical Ledger</h3>
          <div className="flex items-center gap-4">
            <span className="text-xs text-on-surface-variant/40 font-medium">Showing 142 records</span>
            <div className="flex border border-outline-variant/30 rounded-lg overflow-hidden">
              <button className="p-2 bg-surface-container-high text-primary"><Filter size={18} /></button>
              <button className="p-2 text-on-surface-variant/40 hover:bg-surface-container-low"><Download size={18} /></button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden ring-1 ring-outline-variant/15">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                  <th className="px-8 py-4">Participant</th>
                  <th className="px-8 py-4">Session & Group</th>
                  <th className="px-8 py-4">Timestamp</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {records.map((record, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
                          {record.initial}
                        </div>
                        <div>
                          <p className="font-bold text-primary text-sm">{record.name}</p>
                          <p className="text-xs text-on-surface-variant/40">ID: {record.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm text-on-surface-variant">
                      <p className="font-semibold">{record.group}</p>
                      <p className="text-xs">Module: {record.module}</p>
                    </td>
                    <td className="px-8 py-5 text-sm text-on-surface-variant/60 font-mono">
                      {record.time}
                    </td>
                    <td className="px-8 py-5">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                        record.status === 'Present' && "bg-primary/10 text-primary",
                        record.status === 'Late' && "bg-tertiary-fixed text-on-tertiary-fixed",
                        record.status === 'Absent' && "bg-error-container text-on-error-container"
                      )}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant/40 hover:text-primary transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-surface-container-low px-8 py-4 flex justify-between items-center">
            <span className="text-xs text-on-surface-variant/60">Page 1 of 8</span>
            <div className="flex gap-2">
              <button className="p-2 bg-white rounded-lg text-on-surface-variant/40 hover:text-primary transition-colors disabled:opacity-50" disabled>
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 bg-white rounded-lg text-on-surface-variant/40 hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
