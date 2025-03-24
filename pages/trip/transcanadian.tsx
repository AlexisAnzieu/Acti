/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Heading, keyframes, Text } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRef, useState } from "react";

import { Locale } from "../../component/NavbarComponent";

const pulseAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(-50%) translateX(0);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50%) translateX(10px);
  }
  100% {
    opacity: 0.5;
    transform: translateY(-50%) translateX(0);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const smokeAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-20px) scale(2);
    opacity: 0;
  }
`;

const DayCard = ({ day, title, content, imageUrl, index }: any) => (
  <Box
    className="day-card"
    flex="0 0 100vw"
    minWidth="100vw"
    height="100vh"
    padding="2rem"
    scrollSnapAlign="start"
    backgroundColor={`hsl(${index * 45}, 85%, 97%)`}
    position="relative"
  >
    {index < 3 && (
      <Box
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        fontSize="24px"
        opacity="0.5"
        animation={`${pulseAnimation} 2s infinite`}
        _hover={{ opacity: 0.8 }}
      >
        👉
      </Box>
    )}
    <Center
      flexDirection="column"
      height="100%"
      maxWidth="800px"
      margin="0 auto"
      paddingBottom="120px"
      animation={`${fadeInAnimation} 0.5s ease-out`}
    >
      <Heading mb={6} size="2xl">
        {title}
      </Heading>
      <Text mb={6} fontSize="xl" lineHeight="1.8">
        {content}
      </Text>
      {imageUrl && (
        <Box
          maxWidth="600px"
          boxShadow="xl"
          borderRadius="lg"
          overflow="hidden"
        >
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      )}
    </Center>
  </Box>
);

export default function TransCanadian({ lang }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstructions(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      container.scrollLeft += delta * 2.5;
      handleScroll();
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      container.scrollLeft = scrollLeft - walk;
    };

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      isMouseDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isMouseDown = false;
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const delta = window.innerWidth * 0.8;
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: delta, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -delta, behavior: "smooth" });
      }
    };

    // Mouse events
    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    // Touch events
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const content = {
    en: {
      title: "Trans-Canadian Railway Adventure",
      subtitle: "A 4-day journey across Canada's majestic landscapes",
      days: [
        {
          title: "Day 1: Montreal to Ottawa",
          content:
            "Our journey begins at Montreal's historic Central Station, where we board VIA Rail's famous Canadian train. The route to Ottawa winds through the scenic Laurentian region, with its rolling hills and dense forests. As we make our way towards Canada's capital, we catch glimpses of charming small towns and the mighty Ottawa River.",
        },
        {
          title: "Day 2: Ottawa to Toronto",
          content:
            "Departing from Ottawa's beautifully restored station, we travel through Ontario's heartland. The landscape transforms from urban sprawl to pristine wilderness, with countless lakes and forests passing by our window. The afternoon sun paints the scenery in golden hues as we approach Toronto, Canada's largest city.",
        },
        {
          title: "Day 3: Toronto to Winnipeg",
          content:
            "The longest stretch of our journey takes us through the Canadian Shield, a rugged terrain of ancient rock formations and countless lakes. As we continue westward, the landscape gradually shifts to the vast prairies. The endless wheat fields stretch to the horizon, creating a mesmerizing sea of gold under the big prairie sky.",
        },
        {
          title: "Day 4: Winnipeg to Vancouver",
          content:
            "The final and most dramatic leg of our journey begins in Winnipeg. As we head west, the flat prairies give way to rolling foothills, which gradually build up to the majestic Rocky Mountains. The train winds through spectacular mountain passes, alongside rushing rivers, and through long tunnels, before finally descending into the lush Fraser Valley on our way to Vancouver.",
        },
      ],
    },
    fr: {
      title: "Aventure Ferroviaire Transcanadienne",
      subtitle:
        "Un voyage de 4 jours à travers les paysages majestueux du Canada",
      days: [
        {
          title: "Jour 1: Montréal à Ottawa",
          content:
            "Notre périple débute à la gare Centrale de Montréal, où nous montons à bord du célèbre train Le Canadien de VIA Rail. La route vers Ottawa serpente à travers la magnifique région des Laurentides, avec ses collines ondulantes et ses forêts denses. En route vers la capitale du Canada, nous apercevons de charmantes petites villes et la majestueuse rivière des Outaouais.",
        },
        {
          title: "Jour 2: Ottawa à Toronto",
          content:
            "Au départ de la magnifique gare restaurée d'Ottawa, nous traversons le cœur de l'Ontario. Le paysage se transforme, passant de l'étalement urbain à une nature sauvage immaculée, avec d'innombrables lacs et forêts défilant devant nos fenêtres. Le soleil de l'après-midi peint le paysage de teintes dorées alors que nous approchons de Toronto, la plus grande ville du Canada.",
        },
        {
          title: "Jour 3: Toronto à Winnipeg",
          content:
            "La plus longue étape de notre voyage nous fait traverser le Bouclier canadien, un terrain accidenté de formations rocheuses anciennes et d'innombrables lacs. En poursuivant vers l'ouest, le paysage se transforme progressivement en vastes prairies. Les champs de blé infinis s'étendent jusqu'à l'horizon, créant une mer d'or hypnotisante sous l'immense ciel des prairies.",
        },
        {
          title: "Jour 4: Winnipeg à Vancouver",
          content:
            "La dernière et plus spectaculaire étape de notre voyage commence à Winnipeg. En direction de l'ouest, les prairies plates laissent place aux contreforts vallonnés, qui s'élèvent progressivement jusqu'aux majestueuses Montagnes Rocheuses. Le train serpente à travers des cols montagneux spectaculaires, longe des rivières tumultueuses et traverse de longs tunnels, avant de finalement descendre dans la luxuriante vallée du Fraser en route vers Vancouver.",
        },
      ],
    },
  };

  const currentContent = content["fr"];

  return (
    <Box>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
      </Head>

      <Box
        ref={containerRef}
        display="flex"
        overflowX="auto"
        width="100%"
        height="100vh"
        position="fixed"
        top="0"
        left="0"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          "&:active": {
            cursor: "grabbing",
          },
          "@media (hover: none)": {
            scrollSnapType: "x proximity",
          },
        }}
      >
        {currentContent.days.map((day, index) => (
          <DayCard key={index} {...day} index={index} />
        ))}
      </Box>

      {/* Train tracks and train */}
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        height="100px"
        zIndex={1}
      >
        {/* Background gradient for tracks area */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="100%"
          background="linear-gradient(transparent, rgba(255,255,255,0.9) 40%)"
        />

        {/* Tracks */}
        <Box
          position="absolute"
          bottom="40px"
          left="0"
          width="100%"
          height="12px"
          backgroundColor="gray.300"
        >
          <Box
            height="6px"
            position="absolute"
            top="3px"
            left="0"
            width="100%"
            backgroundImage="repeating-linear-gradient(90deg, #666, #666 20px, transparent 20px, transparent 40px)"
          />
        </Box>

        {/* Train with smoke effect */}
        <Box
          position="absolute"
          bottom="52px"
          left={`${scrollProgress * 80}%`}
          transform="translateX(-50%)"
          transition="left 0.1s ease-out"
          fontSize="2rem"
          filter="drop-shadow(0 2px 2px rgba(0,0,0,0.2))"
        >
          <Box
            position="absolute"
            top="-10px"
            left="0"
            animation={`${smokeAnimation} 2s infinite`}
            opacity="0.6"
            fontSize="1rem"
          >
            💨
          </Box>
          🚂
        </Box>
      </Box>

      {/* Progress indicator */}
      <Box
        position="fixed"
        top="20px"
        right="20px"
        backgroundColor="white"
        padding="15px 20px"
        borderRadius="lg"
        boxShadow="lg"
        fontSize="lg"
        fontWeight="bold"
        zIndex={3}
        display="flex"
        alignItems="center"
        gap="10px"
      >
        <Box fontSize="xl">🚉</Box>
        Station {Math.min(Math.ceil(scrollProgress * 4), 4)} of 4
      </Box>

      {/* Scroll instructions */}
      {showInstructions && (
        <Box
          position="fixed"
          bottom="140px"
          left="50%"
          transform="translateX(-50%)"
          backgroundColor="white"
          padding="15px 25px"
          borderRadius="full"
          boxShadow="lg"
          fontSize="lg"
          animation={`${fadeInAnimation} 0.5s ease-out, ${fadeInAnimation} 0.5s ease-in reverse forwards 3.5s`}
          display="flex"
          alignItems="center"
          gap="10px"
          zIndex={3}
        >
          <Box>👆</Box>
          Drag horizontally to explore the journey
        </Box>
      )}
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
