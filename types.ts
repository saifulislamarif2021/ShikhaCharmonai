export interface VolunteerData {
  name: string;
  mobile: string;
  whatsapp: string;
  isResident: string; // 'Yes' | 'No'
  address: string;
  age: string;
  interests: string[];
  weeklyHours: string;
  preferredTime: string;
}

export enum AppStep {
  LANDING = 'LANDING',
  FORM = 'FORM',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS'
}

export interface TeamOption {
  id: string;
  label: string;
  description: string;
}