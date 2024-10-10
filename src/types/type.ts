export type TUser = {
  userName: string;
  email: string;
  password: string;
};

/* sidebar */

import { ReactNode } from 'react';

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
  sidebar?: boolean;
};

export type FieldType = {
  email?: string;
};

// export type MessageModel = {
//   message: string;
//   sentTime: string;
//   sender: string;
//   direction: string; // Add direction property
//   position: number; // Add position property
// };

// export interface MenuBarProps {
//   visible: boolean;
//   handleMenuClick: () => void;
// }

// export interface DataWhyUS {
//   title: string;
//   description: string;
//   img: string;
// }

// export interface Person {
//   name: string;
//   photo: string;
//   age: string;
//   height: string;
//   location: string;
//   religion: string;
//   marital_status: string;
//   education: string;
//   occupation: string;
//   religious_practice: string;
//   description?: string;
// }
export interface TPackage {
  id: number;
  package_name: string;
  price: string;
  discount_type: string;
  discount: string;
  sub_total_price: string;
  currency: string;
  duration: number;
  created_at: Date;
  updated_at: Date;
  allowed_services: TService[];
}

export interface TService {
  name: string;
  status: TStatus;
}

export enum TStatus {
  Active = 'active',
  Deactive = 'deactive',
}

export interface TUsers {
  current_page: number;
  data: TUserDetails[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface TUserDetails {
  id: number;
  name: string;
  status: Status;
  username: null | string;
  diet: null | string;
  drinking: null | string;
  other_lifestyle_preferences: null | string;
  smoking: null | string;
  created_at: Date;
  profile_for: null | string;
  mobile_number: null | string;
  date_of_birth: Date | null;
  gender: Gender | null;
  first_name: null | string;
  last_name: null | string;
  father_name: null;
  mother_name: null;
  marital_status: null | string;
  religion: Religion | null;
  nationality: null | string;
  highest_qualification: null | string;
  college_name: null | string;
  working_sector: null | string;
  profession: null | string;
  profession_details: null;
  monthly_income: null | string;
  father_occupation: null | string;
  mother_occupation: null | string;
  living_country: null | string;
  currently_living_in: null;
  city_living_in: null | string;
  family_details: null;
  height: null | string;
  birth_place: null | string;
  personal_values: null;
  disability: null | string;
  posted_by: null;
  profile_created_by: null | string;
  whatsapp: null | string;
  community: null | string;
  mother_tongue: null | string;
  sub_community: null | string;
  family_values: null | string;
  family_location: null | string;
  family_type: null | string;
  family_native_place: null | string;
  total_siblings: number | null;
  siblings_married: number | null;
  siblings_not_married: number | null;
  state: null | string;
  about_myself: null;
  partner_age: null | string;
  weight: null;
  bodyType: null;
  race: null;
  blood_group: null | string;
  mother_status: null;
  is_favorited: boolean;
  age: number | null;
  profile_picture_url: string;
  invitation_send_status: InvitationSendStatus;
  favorites_count: number;
  profile_completion: string;
  partner_marital_statuses: Partner[];
  partner_religions: Partner[];
  partner_communities: Partner[];
  partner_mother_tongues: Partner[];
  partner_qualification: any[];
  partner_working_with: any[];
  partner_professions: Partner[];
  partner_professional_details: any[];
  partner_countries: Partner[];
  partner_states: Partner[];
  partner_cities: Partner[];
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum InvitationSendStatus {
  NotSent = 'not sent',
}

export interface Partner {
  id: number;
  user_id: number;
  city?: string;
  created_at: Date;
  updated_at: Date;
  community?: string;
  country?: string;
  marital_status?: string;
  mother_tongue?: string;
  profession?: string;
  religion?: Religion;
  state?: string;
}

export enum Religion {
  Buddhism = 'Buddhism',
  Christianity = 'Christianity',
  Islam = 'Islam',
}

export enum Status {
  Active = 'active',
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
