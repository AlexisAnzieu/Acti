
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, keyframes } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

import { Locale } from "../../../component/NavbarComponent";
import LazyTooltipImage from "../../../components/LazyTooltipImage";
import LazyTooltipVideo from "../../../components/LazyTooltipVideo";
import { TrainSlider } from "../../../components/TrainSlider";
import { getTransCanadianContent } from "../../../content/trip/transcanadian/";

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

const DayCard = ({ title, content, imageUrl, index }: any) => (
  <Box
    className="day-card"
    minHeight="100vh"
    backgroundColor={`hsl(${index * 45}, 85%, 97%)`}
    position="relative"
    padding="2rem"
    paddingBottom="100px"
  >
    <Box
      maxWidth="800px"
      margin="0 auto"
      paddingTop="2rem"
      animation={`${fadeInAnimation} 0.5s ease-out`}
    >
      <Heading mb={6} size="xl" textAlign="center">
        {title}
      </Heading>
      <Box>
        {content}
      </Box>
      {imageUrl && (
        <Box
          maxWidth="600px"
          margin="0 auto"
          boxShadow="xl"
          borderRadius="lg"
          overflow="hidden"
          mt={6}
        >
          <Box
            as="img"
            src={imageUrl}
            alt={title}
            width="100%"
            height="auto"
          />
        </Box>
      )}
    </Box>
  </Box>
);

export default function TransCanadian() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Track day for potential future use
  const [, setCurrentDay] = useState(0); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      if (!container) return;
      
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = Math.max(0, scrollHeight - clientHeight);
      const progress = maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;
      
      // Calculate current day based on scroll position
      const dayCards = container.querySelectorAll('.day-card');
      let newCurrentDay = 0;
      
      dayCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // If the card is visible (top is above the middle of the viewport)
        if (rect.top <= containerRect.height / 2) {
          newCurrentDay = index;
        }
      });
      
      setScrollProgress(progress);
      setCurrentDay(newCurrentDay);
    };

    const handleScroll = () => {
      updateScrollProgress();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProgressChange = (progress: number) => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollHeight, clientHeight } = container;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const targetScroll = progress * maxScroll;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'auto' // Use 'auto' for instant scrolling during drag
    });
  };

  const currentContent = getTransCanadianContent("fr");

  return (
    <Box>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
      </Head>

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
            // Guard for SSR
            if (typeof window === 'undefined' || typeof document === 'undefined') {
              return null;
            }

            const href = activeAnchor?.getAttribute("href") ?? "";
            
            if (href.endsWith(".mov") || href.includes("video") || href.endsWith(".mp4")) {
              // Use the new LazyTooltipVideo component for videos
              return (
                <LazyTooltipVideo
                  src={href}
                  style={{ 
                    borderRadius: "5%", 
                    maxWidth: "100%",
                    width: "100%"
                  }}
                />
              );
            }
            
            // For images (jpg), use Next.js Image for optimization with forced lazy loading
            if (href.endsWith(".jpg") || href.endsWith(".jpeg") || href.endsWith(".png")) {
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
                    height: "auto"
                  }}
                />
              );
            }
            
            // Use LazyTooltipImage for other formats as well
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
                  height: "auto"
                }}
              />
            );
          }}
        />
      )}

      <Box
        ref={containerRef}
        width="100%"
        height="100vh"
        overflowY="auto"
        position="fixed"
        top="10px"
        left="0"
        css={{
          "&::-webkit-scrollbar": { 
            display: "none"
          },
          "&::-webkit-scrollbar-track": {
            display: "none"
          },
          "&::-webkit-scrollbar-thumb": {
            display: "none"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            display: "none"
          },
          scrollbarWidth: "none" // Firefox
        }}
      >
        {currentContent.days.map((day, index) => (
          <DayCard key={index} {...day} index={index} />
        ))}
      </Box>

      <TrainSlider 
        scrollProgress={scrollProgress}
        onProgressChange={handleProgressChange}
      />
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
