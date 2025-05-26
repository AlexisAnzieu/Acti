
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, keyframes } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

import { Locale } from "../../../component/NavbarComponent";
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
  const [currentDay, setCurrentDay] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [preloadedMedia, setPreloadedMedia] = useState<Map<string, HTMLVideoElement | HTMLImageElement>>(new Map());
  const [isClient, setIsClient] = useState(false);

  // Preload all tooltip media
  const preloadMedia = useCallback(async () => {
    if (typeof window === 'undefined') return; // Guard for SSR
    
    const mediaUrls: string[] = [];
    
    // Wait a bit for DOM to be fully rendered
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Collect all data-tooltip-id anchors with href attributes
    const tooltipAnchors = document.querySelectorAll('[data-tooltip-id="my-tooltip"][href]');
    tooltipAnchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href) {
        mediaUrls.push(href);
      }
    });

    console.log('Preloading media:', mediaUrls);
    const mediaMap = new Map<string, HTMLVideoElement | HTMLImageElement>();

    for (const url of mediaUrls) {
      try {
        if (url.endsWith('.mov') || url.includes('video') || url.endsWith('.mp4')) {
          // Preload video
          const video = document.createElement('video');
          video.src = url;
          video.preload = 'auto';
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.style.display = 'none';
          document.body.appendChild(video);
          
          await Promise.race([
            new Promise((resolve, reject) => {
              video.addEventListener('loadeddata', resolve);
              video.addEventListener('error', reject);
              video.load();
            }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
          ]);
          
          console.log('Video preloaded:', url);
          mediaMap.set(url, video);
        } else {
          // Preload image
          const img = new Image();
          img.crossOrigin = 'anonymous';
          await Promise.race([
            new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
              img.src = url;
            }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
          ]);
          console.log('Image preloaded:', url);
          mediaMap.set(url, img);
        }
      } catch (error) {
        console.warn(`Failed to preload media: ${url}`, error);
      }
    }

    setPreloadedMedia(mediaMap);
    console.log('Media preloading complete:', mediaMap.size, 'items');
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const timer = setTimeout(() => {
      setShowInstructions(false);
      // Start preloading after initial render
      preloadMedia();
    }, 1000);
    return () => clearTimeout(timer);
  }, [preloadMedia, isClient]);

  // Cleanup preloaded video elements on unmount
  useEffect(() => {
    return () => {
      preloadedMedia.forEach((element) => {
        if (element instanceof HTMLVideoElement && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [preloadedMedia]);

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
              // Return JSX video element instead of DOM element
              return (
                <video
                  src={href}
                  style={{ 
                    borderRadius: "5%", 
                    maxWidth: "100%",
                    display: "block"
                  }}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch((error) => {
                      console.warn('Video autoplay failed:', error);
                    });
                  }}
                />
              );
            }
            
            // Return JSX img element instead of DOM element
            return (
              <img
                src={href}
                style={{ 
                  borderRadius: "5%", 
                  maxWidth: "100%" 
                }}
                alt=""
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
