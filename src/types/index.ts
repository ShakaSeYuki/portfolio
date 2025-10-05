export interface Skill {
  id: string;
  name: string;
  rating: number;
  image: string;
  alt: string;
}

export interface Work {
  id: string;
  name: string;
  image: string;
  alt: string;
  url: string;
  isExternal?: boolean;
}

export interface Profile {
  name: string;
  image: string;
  periods: ProfilePeriod[];
}

export interface ProfilePeriod {
  period: string;
  description: string;
}