export type Page = 'dashboard' | 'reports' | 'participants' | 'mark-attendance';

export interface Session {
  id: string;
  title: string;
  sessionId: string;
  time: string;
  status: 'completed' | 'live';
  attendance?: string;
  icon: string;
}

export interface Participant {
  id: string;
  name: string;
  role: string;
  studentId: string;
  email: string;
  phone: string;
  photo: string;
  status: 'present' | 'absent' | 'late' | 'none';
}
