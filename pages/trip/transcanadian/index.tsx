/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

import { Locale } from "../../../component/NavbarComponent";
import LazyTooltipImage from "../../../components/LazyTooltipImage";
import { getTransCanadianContent } from "../../../content/trip/transcanadian/";

const TimelineCard = ({ title, content }: any) => (
  <Box className="card">
    <Box className="info">
      <Box className="title">{title}</Box>
      <Box>{content}</Box>
    </Box>
  </Box>
);

interface TransCanadianProps {
  lang: Locale;
}

export default function TransCanadian({ lang }: TransCanadianProps) {
  const { t } = useTranslation("common");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentContent = getTransCanadianContent(lang, t);

  // Example retrospectives content (replace with real content as needed)
  const retrospectives = [
    {
      name: "Alexis Anzieu",
      avatar:
        "https://acti.anzieu.com/assets/ebaed129-92c2-499f-bcaa-f1f6a1c18765",
      text:
        lang === "fr"
          ? `"Je suis passionné par les récits, ces gouttes de péripéties qui fusionnent en un doux ruisseau de vie. Ils sont exposés sur une multitude de supports : la littérature, la musique, la peinture… Les mots s’alignent, les notes se répondent, les couleurs se mêlent pour dévoiler la vérité de l’artiste. Prendre le temps de les contempler permet d’en saisir le sens. J’ai du mal à retenir les citations, mais l’écrivain José Rodrigues dos Santos disait : “la beauté est la couleur avec laquelle on peint la vérité.”

Cette aventure en train n’a pas été des plus exaltantes. Le fossé des générations et de la langue a freiné toutes connexions profondes, et ces quatre jours enfermés dans des corridors métalliques limitaient la liberté de mouvement. Pourtant, le temps disponible offrait l’occasion d’observer les récits qui défilaient, heure après heure. Cette nature, chaque jour, peignait des tableaux vivants à perte de vue. Ce voyage était long, mais il était vrai, chaque kilomètre décrivant une vérité qui se mouvait à notre allure. Et c’était beau.

Un mois plus tard, j’étais dans l’avion, de retour pour Montréal. À travers les minuscules hublots, on distinguait à peine l’extérieur, et encore moins les fresques grouillantes en contrebas. J’ai gagné autant en temps que j’ai perdu en vérité. Alors, pour compenser cette beauté envolée, j’ai vaguement tenté de m’abreuver de films, surconsommer pour oublier."`
          : `"I am passionate about stories, those drops of adventure that merge into a gentle stream of life. They are displayed on countless mediums: literature, music, painting… Words align, notes respond, colors blend to reveal the artist’s truth. Taking the time to contemplate them allows us to grasp their meaning. I have trouble remembering quotes, but the writer José Rodrigues dos Santos said: “beauty is the color with which we paint the truth.”

This train adventure was not the most exhilarating. The generational and language gap hindered any deep connections, and those four days locked in metal corridors limited our freedom of movement. Yet, the available time offered the chance to observe the stories unfolding, hour after hour. Each day, nature painted living landscapes as far as the eye could see. The journey was long, but it was real—each kilometer describing a truth that moved at our pace. And it was beautiful.

A month later, I was on a plane, returning to Montreal. Through the tiny windows, you could barely make out the outside, let alone the teeming frescoes below. I gained as much time as I lost in truth. So, to make up for that vanished beauty, I vaguely tried to drown myself in movies, overconsuming to forget."`,
    },
    {
      name: "Carla Fabregas",
      avatar:
        "https://acti.anzieu.com/assets/e4848cd3-25a6-47c0-9b87-38ba696358f8",
      text:
        lang === "fr"
          ? `"Mission : mettre sur papier quelques mots, quelques pensées, quelques sensations, quelques souvenirs de notre expérience ferroviaire transcanadienne.
Je n'avais aucune attente particulière pour ce voyage. Seulement un désir profond de déconnexion, une vraie coupure avec le quotidien professionnel, une reconnection à l’instant présent. Prendre du temps pour moi, pour nous.

Quand nos proches nous demandent comment nous avons vécu cette traversée, j’aime répondre que cela m’a fait du bien. J’étais apaisée d’avoir pu déléguer toute la charge mentale liée à l’organisation, et comme je n’attendais rien de précis, chaque journée s’est construite au fil de petites surprises.
Quatre jours, quatre nuits à bord d’un train : cela peut sembler long, et pourtant le temps a filé. Entre les repas, les découvertes depuis la voiture panoramique, la faune et la flore à couper le souffle, les activités proposées par l’équipage, les moments de lecture, les jeux, et les sorties improvisées sur les quais lors des escales, notre quotidien ferroviaire a trouvé très vite son propre rythme.

Si je devais ne retenir que quelques instants marquants, ce seraient sans doute ceux passés dans la voiture panoramique, à contempler des paysages qui défilent sans jamais se ressembler. J’ai été impressionnée par la richesse des panoramas canadiens qui s’étendent sur plus de 7 800 kilomètres, d’un océan à l’autre. Plaines, prairies, montagnes, lacs, rivières, marécages, terres rocailleuses… La diversité des horizons m’a tout simplement fascinée.
Quant à l’expérience en elle-même, je ne peux que la recommander, au moins une fois dans sa vie si l’occasion se présente. Le personnel est attentionné, le souci du détail – que ce soit dans les divertissements, les repas ou le confort des passagers – est remarquable. Aucune logistique à gérer : il suffisait simplement de se présenter à l’heure pour profiter de tout ce que le voyage avait à offrir."`
          : `"Mission: Put on paper a few words, thoughts, sensations, and memories from our trans-Canadian rail experience.
I had no particular expectations for this trip. Just a deep desire to disconnect, a real break from work, and a reconnection with the present moment. To take time for myself, for us.
When our loved ones ask how we experienced this crossing, I like to say it did me good. I was relieved to let go of all the mental load of planning, and since I expected nothing specific, each day unfolded with little surprises.
Four days and four nights on a train: it might seem long, yet time flew by. Between meals, discoveries from the panoramic car, breathtaking wildlife and scenery, activities offered by the crew, moments of reading, games, and impromptu outings on the platforms during stops, our railway routine quickly found its own rhythm.
If I had to pick just a few highlights, it would surely be those spent in the panoramic car, contemplating ever-changing landscapes. I was amazed by the richness of Canadian panoramas stretching over 7,800 kilometers, from one ocean to the other. Plains, prairies, mountains, lakes, rivers, marshes, rocky lands… The diversity of horizons simply fascinated me.
As for the experience itself, I can only recommend it—at least once in a lifetime, if the opportunity arises. The staff is attentive, the attention to detail—whether in entertainment, meals, or passenger comfort—is remarkable. No logistics to manage: you just had to show up on time to enjoy everything the journey had to offer."`,
    },
  ];

  return (
    <Box width="100%" maxWidth="100%" overflowX="hidden">
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
      </Head>
      {/* Back to trips button */}
      <Box maxWidth="800px" mt="2rem" textAlign="left" width="auto">
        <Link href="/trip" passHref legacyBehavior>
          <Button
            as="a"
            colorScheme="teal"
            variant="outline"
            mb={6}
            ml="1rem"
            leftIcon={<FaArrowLeft />}
            width="auto"
            minW={0}
          >
            {t("trips.transcanadian.backToTrips")}
          </Button>
        </Link>
      </Box>

      {/* Big Title and Subtitle */}
      <Box marginTop={30} marginBottom={30} textAlign={"center"}>
        <Heading fontFamily={"autography"} fontSize={85} mb={10}>
          {lang === "fr" ? "D’un océan à l’autre" : "Coast to Coast"}
        </Heading>
        <Heading fontStyle={"italic"} size="l">
          {lang === "fr"
            ? "Récit d’une traversée ferroviaire à travers le Canada."
            : "A story of a railway crossing across Canada."}
        </Heading>
      </Box>

      {isClient && (
        <Tooltip
          place="left"
          opacity={1}
          noArrow={true}
          float={true}
          id="my-tooltip"
          style={{
            maxWidth: "600px",
            width: "40%",
            borderRadius: "5%",
            zIndex: 999,
            padding: 0,
          }}
          render={({ activeAnchor }) => {
            if (
              typeof window === "undefined" ||
              typeof document === "undefined"
            ) {
              return null;
            }

            const href = activeAnchor?.getAttribute("href") ?? "";

            return (
              <LazyTooltipImage
                src={href}
                alt=""
                width={600}
                height={400}
                quality={30}
                sizes="(max-width: 600px) 100vw, 600px"
                style={{
                  borderRadius: "5%",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            );
          }}
        />
      )}

      <Container maxW={1000} mb={100}>
        {/* Timeline Section */}
        <Box className="timeline">
          <Box className="outer">
            {currentContent.days.map((day, index) => (
              <TimelineCard key={index} {...day} index={index} />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Rétrospectives Section */}
      <Box
        marginTop={30}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={5}
      >
        <Box textAlign="center" mb={10}>
          <Heading size="xl">
            {lang === "fr" ? "Rétrospectives" : "Reflections"}
          </Heading>
        </Box>
        <Box width="100%" maxWidth={900}>
          {retrospectives.map((r, i) => (
            <Box
              key={i}
              width="100%"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="center"
              alignItems={{ base: "center", md: "flex-start" }}
              mb={10}
            >
              <Avatar
                size={"2xl"}
                name={r.name}
                src={r.avatar}
                mr={{ base: 0, md: 6 }}
                mb={{ base: 4, md: 0 }}
                mt={1}
              />
              <Text
                fontStyle="italic"
                lineHeight="25px"
                textAlign="justify"
                whiteSpace="pre-line"
                width="100%"
                maxWidth={700}
                display="block"
              >
                {r.text}
              </Text>
            </Box>
          ))}
          {retrospectives.length > 1 &&
            retrospectives.map(
              (_, i) =>
                i < retrospectives.length - 1 && (
                  <Divider key={"divider-" + i} />
                )
            )}
        </Box>
        <Box
          fontSize={30}
          fontFamily={"autography"}
          textAlign={"right"}
          maxWidth={900}
          margin="0 auto"
          mt={10}
        >
          {lang === "fr"
            ? "Écrit en juillet 2025 à Montréal par"
            : "Written in July 2025 in Montreal by"}
          <Box fontSize={80} mt={-2} textAlign="right">
            Carla & Alexis
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      lang: locale,
      ...(await serverSideTranslations(locale as Locale, ["common"])),
    },
  };
}
