import dynamic from 'next/dynamic';

import { TripContent } from './types';

export const getTransCanadianContent = (locale: 'en' | 'fr'): TripContent => {
  const Day1Content = dynamic(() => import(`./${locale}/Day1Content`).then(mod => mod.Day1Content));
  const Day2Content = dynamic(() => import(`./${locale}/Day2Content`).then(mod => mod.Day2Content));
  const Day3Content = dynamic(() => import(`./${locale}/Day3Content`).then(mod => mod.Day3Content));
  const Day4Content = dynamic(() => import(`./${locale}/Day4Content`).then(mod => mod.Day4Content));

  const contentMap = {
    fr: {
      title: "Aventure Ferroviaire Transcanadienne",
      subtitle: "Un voyage de 4 jours à travers les paysages majestueux du Canada",
      days: [
        {
          title: "Le grand départ",
          content: <Day1Content />,
        },
        {
          title: "Jour 2: Toronto à Ottawa", 
          content: <Day2Content />,
        },
        {
          title: "Jour 3: Toronto à Winnipeg",
          content: <Day3Content />,
        },
        {
          title: "Jour 4: Winnipeg à Vancouver",
          content: <Day4Content />,
        },
      ],
    },
    en: {
      title: "Trans-Canadian Railway Adventure",
      subtitle: "A 4-day journey across Canada's majestic landscapes",
      days: [
        {
          title: "The Great Departure",
          content: <Day1Content />,
        },
        {
          title: "Day 2: Journey Through the Prairies",
          content: <Day2Content />,
        },
        {
          title: "Day 3: Across the Plains",
          content: <Day3Content />,
        },
        {
          title: "Day 4: Through the Rockies to Vancouver",
          content: <Day4Content />,
        },
      ],
    },
  };

  return contentMap[locale];
};
