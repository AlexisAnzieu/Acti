import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import type { Locale } from "../../component/NavbarComponent";
import TripsSection from "../../component/TripsSection";

export default function Trips() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{`${t("trips.title")} - Actï`}</title>
        <meta
          property="og:title"
          content={`${t("trips.title")} - Actï`}
          key="ogtitle"
        />
      </Head>
      <TripsSection headingLevel="h1" />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as Locale, ["common"])),
    },
    revalidate: 10,
  };
}
