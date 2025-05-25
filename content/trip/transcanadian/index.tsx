import { TripContent } from './types';
import { Day1Content } from './Day1Content';
import { Day2Content } from './Day2Content';
import { Day3Content } from './Day3Content';
import { Day4Content } from './Day4Content';

export const getTransCanadianContent = (locale: 'en' | 'fr'): TripContent => {
  const contentMap = {
    fr: {
      title: "Aventure Ferroviaire Transcanadienne",
      subtitle: "Un voyage de 4 jours à travers les paysages majestueux du Canada",
      days: [
        {
          title: "Jour 1: Montréal à Toronto",
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
          title: "Day 1: Montreal to Ottawa",
          content: <Day1Content />, // You can create English versions later
        },
        {
          title: "Day 2: Ottawa to Toronto",
          content: <Day2Content />,
        },
        {
          title: "Day 3: Toronto to Winnipeg",
          content: <Day3Content />,
        },
        {
          title: "Day 4: Winnipeg to Vancouver",
          content: <Day4Content />,
        },
      ],
    },
  };

  return contentMap[locale];
};
