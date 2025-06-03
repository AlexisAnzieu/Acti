import dynamic from 'next/dynamic';

import { TripContent } from './types';

type TranslateFunction = (key: string) => string;

export const getTransCanadianContent = (locale: 'en' | 'fr', t: TranslateFunction): TripContent => {
  const Day1Content = dynamic(() => import(`./${locale}/Day1Content`).then(mod => mod.Day1Content));
  const Day2Content = dynamic(() => import(`./${locale}/Day2Content`).then(mod => mod.Day2Content));
  const Day3Content = dynamic(() => import(`./${locale}/Day3Content`).then(mod => mod.Day3Content));
  const Day4Content = dynamic(() => import(`./${locale}/Day4Content`).then(mod => mod.Day4Content));

  const contentMap = {
    fr: {
      title: t('trips.transcanadian.pageTitle'),
      subtitle: t('trips.transcanadian.subtitle'),
      days: [
        {
          title: t('trips.transcanadian.days.day1.title'),
          content: <Day1Content />,
        },
        {
          title: t('trips.transcanadian.days.day2.title'),
          content: <Day2Content />,
        },
        {
          title: t('trips.transcanadian.days.day3.title'),
          content: <Day3Content />,
        },
        {
          title: t('trips.transcanadian.days.day4.title'),
          content: <Day4Content />,
        },
      ],
    },
    en: {
      title: t('trips.transcanadian.pageTitle'),
      subtitle: t('trips.transcanadian.subtitle'),
      days: [
        {
          title: t('trips.transcanadian.days.day1.title'),
          content: <Day1Content />,
        },
        {
          title: t('trips.transcanadian.days.day2.title'),
          content: <Day2Content />,
        },
        {
          title: t('trips.transcanadian.days.day3.title'),
          content: <Day3Content />,
        },
        {
          title: t('trips.transcanadian.days.day4.title'),
          content: <Day4Content />,
        },
      ],
    },
  };

  return contentMap[locale];
};
