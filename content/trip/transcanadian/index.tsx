import dynamic from 'next/dynamic';

import { TripContent } from './types';

export const getTransCanadianContent = (locale: 'en' | 'fr'): TripContent => {
  const Day1Content = dynamic(() => import(`./${locale}/Day1Content`).then(mod => mod.Day1Content));
  const Day2Content = dynamic(() => import(`./${locale}/Day2Content`).then(mod => mod.Day2Content));
  const Day3Content = dynamic(() => import(`./${locale}/Day3Content`).then(mod => mod.Day3Content));
  const Day4Content = dynamic(() => import(`./${locale}/Day4Content`).then(mod => mod.Day4Content));

  const getTitleKey = (key: string) => `trips.transcanadian.${key}`;
  const getDayTitleKey = (day: number) => `trips.transcanadian.days.day${day}.title`;

  const contentMap = {
    fr: {
      title: getTitleKey("pageTitle"),
      subtitle: getTitleKey("subtitle"),
      days: [
        {
          title: getDayTitleKey(1),
          content: <Day1Content />,
        },
        {
          title: getDayTitleKey(2),
          content: <Day2Content />,
        },
        {
          title: getDayTitleKey(3),
          content: <Day3Content />,
        },
        {
          title: getDayTitleKey(4),
          content: <Day4Content />,
        },
      ],
    },
    en: {
      title: getTitleKey("pageTitle"),
      subtitle: getTitleKey("subtitle"),
      days: [
        {
          title: getDayTitleKey(1),
          content: <Day1Content />,
        },
        {
          title: getDayTitleKey(2),
          content: <Day2Content />,
        },
        {
          title: getDayTitleKey(3),
          content: <Day3Content />,
        },
        {
          title: getDayTitleKey(4),
          content: <Day4Content />,
        },
      ],
    },
  };

  return contentMap[locale];
};
