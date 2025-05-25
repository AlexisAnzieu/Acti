import { ReactNode } from 'react';

export interface DayContent {
  title: string;
  content: ReactNode;
  imageUrl?: string;
}

export interface TripContent {
  title: string;
  subtitle: string;
  days: DayContent[];
}
