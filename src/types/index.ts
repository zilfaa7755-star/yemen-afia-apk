export type UserRole = 'patient' | 'doctor' | 'secretary' | 'nurse' | 'hospital' | 'admin';

export interface User {
  id: string;
  patient_code?: string;
  full_name: string;
  phone: string;
  date_of_birth?: string;
  age?: number;
  gender?: 'male' | 'female';
  blood_type?: string;
  chronic_diseases?: string[];
  allergies?: string[];
  drug_allergies?: string[];
  weight?: number;
  height?: number;
  city?: string;
  emergency_contact?: string;
  emergency_phone?: string;
  auth_id?: string;
  created_at?: string;
}

export interface Doctor {
  id: string;
  full_name: string;
  phone: string;
  specialty?: string;
  license_number?: string;
  clinic_name?: string;
  available?: boolean;
  auth_id?: string;
  created_at?: string;
  // Extended fields used in booking/search
  average_consultation_time?: number;
  rating?: number;
  price?: number;
  experience_years?: number;
  education?: string;
  about?: string;
  clinic?: {
    id?: string;
    name?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
  };
  queue_info?: {
    current_queue: number;
    estimated_wait: number;
  };
}

export interface Secretary {
  id: string;
  full_name: string;
  phone: string;
  doctor_id?: string;
  auth_id?: string;
  created_at?: string;
}

export interface AuthUser {
  id: string;
  role: UserRole;
  profile: User | Doctor | Secretary;
}

export interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  clinic_id?: string;
  appointment_date: string;
  estimated_time: string;
  type?: string;
  status: string;
  symptoms?: string;
  notes?: string;
  queue_number?: number;
  is_emergency?: boolean;
  payment_status?: string;
  completed_at?: string;
  created_at: string;
}

export interface QueueItem {
  id: string;
  patient_id: string;
  doctor_id?: string;
  clinic_id?: string;
  queue_number: number;
  status: string;
  patient_name?: string;
  patient_phone?: string;
  symptoms?: string;
  is_emergency?: boolean;
  estimated_time?: string;
  created_at: string;
}
