/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, keyframes, Text } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRef, useState } from "react";

import { Locale } from "../../../component/NavbarComponent";
import { getTransCanadianContent } from "./content/";

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

const trainWobbleAnimation = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateX(-50%) translateY(-1px) rotate(0.5deg);
  }
  50% {
    transform: translateX(-50%) translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateX(-50%) translateY(1px) rotate(-0.5deg);
  }
`;

const railShineAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const speedLinesAnimation = keyframes`
  0% {
    transform: translateX(60px);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
  }
`;

const wheelRotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const DayCard = ({ title, content, imageUrl, index }: any) => (
  <Box
    className="day-card"
    minHeight="100vh"
    backgroundColor={`hsl(${index * 45}, 85%, 97%)`}
    position="relative"
    padding="2rem"
    paddingBottom="140px"
  >
    <Box
      maxWidth="800px"
      margin="0 auto"
      paddingTop="2rem"
      animation={`${fadeInAnimation} 0.5s ease-out`}
    >
      <Heading mb={6} size="2xl" textAlign="center">
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartProgress, setDragStartProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstructions(false), 4000);
    return () => clearTimeout(timer);
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

  const handleRailClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickProgress = clickX / rect.width;
    
    const { scrollHeight, clientHeight } = container;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const targetScroll = clickProgress * maxScroll;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleTrainMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartProgress(scrollProgress);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    
    const container = containerRef.current;
    if (!container) return;

    const deltaX = event.clientX - dragStartX;
    const trackWidth = window.innerWidth;
    const deltaProgress = deltaX / trackWidth;
    const newProgress = Math.max(0, Math.min(1, dragStartProgress + deltaProgress));
    
    const { scrollHeight, clientHeight } = container;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const targetScroll = newProgress * maxScroll;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'auto'
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragStartX, dragStartProgress]);

  const currentContent = getTransCanadianContent("fr");

  return (
    <Box>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
      </Head>

      <Box
        ref={containerRef}
        width="100%"
        height="100vh"
        overflowY="auto"
        position="fixed"
        top="0"
        left="0"
        css={{
          "&::-webkit-scrollbar": { 
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(0,0,0,0.1)",
            borderRadius: "4px"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.3)",
            borderRadius: "4px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0,0,0,0.5)"
          }
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
        height="120px"
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

        {/* Rail bed/gravel */}
        <Box
          position="absolute"
          bottom="35px"
          left="0"
          right="0"
          height="20px"
          backgroundColor="#8B7355"
          backgroundImage="radial-gradient(circle, #A0916B 1px, transparent 1px)"
          backgroundSize="4px 4px"
        />

        {/* Main tracks with enhanced styling */}
        <Box
          position="absolute"
          bottom="40px"
          left="0"
          right="0"
          height="14px"
          backgroundColor="gray.400"
          borderRadius="2px"
          overflow="hidden"
          cursor="pointer"
          onClick={handleRailClick}
          _hover={{
            backgroundColor: "gray.500"
          }}
          transition="background-color 0.2s ease"
        >
          {/* Animated rail shine effect */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            background="linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)"
            backgroundSize="200px 100%"
            animation={`${railShineAnimation} 3s infinite linear`}
          />
          
          {/* Rail ties/sleepers */}
          <Box
            height="8px"
            position="absolute"
            top="3px"
            left="0"
            width="100%"
            backgroundImage="repeating-linear-gradient(90deg, #4A4A4A, #4A4A4A 15px, #666 15px, #666 25px)"
          />
        </Box>

        {/* Rail markers at different positions */}
        {[20, 40, 60, 80].map((position, index) => (
          <Box
            key={index}
            position="absolute"
            bottom="60px"
            left={`${position}%`}
            fontSize="0.8rem"
            opacity="0.4"
          >
            🏔️
          </Box>
        ))}

        {/* Enhanced train with multiple smoke puffs and wobble */}
        <Box
          position="absolute"
          bottom="54px"
          left={`${scrollProgress * 100}%`}
          animation={scrollProgress > 0.05 ? `${trainWobbleAnimation} 0.6s infinite` : 'none'}
          transition="left 0.1s ease-out"
          fontSize="2.2rem"
          filter="drop-shadow(0 3px 6px rgba(0,0,0,0.3))"
          zIndex={2}
          transform={`translateX(-${scrollProgress * 100}%)`}
          cursor={isDragging ? 'grabbing' : 'grab'}
          onMouseDown={handleTrainMouseDown}
          userSelect="none"
        >
          {/* Multiple smoke puffs - positioned relative to locomotive */}
          {[...Array(4)].map((_, i) => {
            // Calculate offset based on train length (how many cars are visible)
            const trainLength = 
              (scrollProgress > 0.2 ? 1 : 0) + 
              (scrollProgress > 0.5 ? 1 : 0) + 
              (scrollProgress > 0.8 ? 1 : 0);
            const locomotiveOffset = trainLength * 35; // Approximate width of each car
            
            return (
              <Box
                key={i}
                position="absolute"
                top={`${-15 - i * 8}px`}
                left={`${locomotiveOffset - 5 + i * 3}px`}
                animation={`${smokeAnimation} ${2 + i * 0.3}s infinite`}
                opacity="0.6"
                fontSize="1rem"
                style={{
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                💨
              </Box>
            );
          })}
          
          {/* Train cars */}
          <Box display="flex" alignItems="center">
            {/* Passenger cars - appear before the locomotive */}
            {scrollProgress > 0.8 && (
              <Box fontSize="1.6rem" marginRight="-4px">
                🚋
              </Box>
            )}
            {scrollProgress > 0.5 && (
              <Box fontSize="1.8rem" marginRight="-4px">
                🚃
              </Box>
            )}
            {scrollProgress > 0.2 && (
              <Box fontSize="1.8rem" marginRight="-4px">
                🚃
              </Box>
            )}
            
            <Box position="relative" transform="scaleX(-1)">
              🚂
              {/* Animated wheels */}
              <Box
                position="absolute"
                bottom="-2px"
                left="8px"
                fontSize="0.6rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
              >
                ⚙️
              </Box>
              <Box
                position="absolute"
                bottom="-2px"
                right="8px"
                fontSize="0.6rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
                style={{ animationDelay: '0.15s' }}
              >
                ⚙️
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Speed lines effect */}
        {scrollProgress > 0.1 && (
          <Box
            position="absolute"
            bottom="70px"
            left="0"
            width="100%"
            height="20px"
            overflow="hidden"
          >
            {[...Array(8)].map((_, i) => {
              const trainPositionPercent = scrollProgress * 100;
              
              // Calculate train length based on visible cars
              const trainLength = 
                (scrollProgress > 0.2 ? 1 : 0) + 
                (scrollProgress > 0.5 ? 1 : 0) + 
                (scrollProgress > 0.8 ? 1 : 0);
              const trainWidthPercent = 2 + (trainLength * 1.5);
              
              // Add randomness to positioning (slower updates)
              const baseOffset = -(5 + (i * 2.5));
              const randomOffset = (Math.sin(Date.now() * 0.0003 + i * 1.5) * 1.5);
              const lineOffsetPercent = baseOffset + randomOffset;
              const lineLeftPercent = trainPositionPercent - trainWidthPercent + lineOffsetPercent;
              
              // Random vertical positioning (slower)
              const randomVertical = Math.sin(Date.now() * 0.0002 + i * 2) * 3;
              const verticalPosition = (i * 2.5) + randomVertical;
              
              // Random line properties (slower changes)
              const randomWidth = 25 + (Math.sin(Date.now() * 0.0004 + i * 0.8) * 10);
              const randomOpacity = 0.25 + (Math.sin(Date.now() * 0.0003 + i * 1.2) * 0.15);
              const randomDuration = 0.8 + (Math.sin(Date.now() * 0.0002 + i * 0.6) * 0.4);
              const randomDelay = Math.sin(Date.now() * 0.0001 + i * 0.9) * 0.2;
              
              // Only show lines that are within reasonable bounds (0% to 100%)
              if (lineLeftPercent < -10 || lineLeftPercent > 110) return null;
              
              return (
                <Box
                  key={i}
                  position="absolute"
                  bottom={`${Math.max(0, verticalPosition)}px`}
                  left={`${lineLeftPercent}%`}
                  width={`${randomWidth}px`}
                  height="2px"
                  backgroundColor={`rgba(100,100,100,${randomOpacity})`}
                  animation={`${speedLinesAnimation} ${randomDuration}s infinite linear`}
                  style={{
                    animationDelay: `${randomDelay}s`,
                  }}
                />
              );
            })}
          </Box>
        )}

        {/* Station markers */}
        {['Montréal', 'Ottawa', 'Toronto', 'Winnipeg', 'Vancouver'].map((station, index) => (
          <Box
            key={index}
            position="absolute"
            bottom="20px"
            left={`${index * 25}%`}
            fontSize="1.2rem"
            opacity={scrollProgress >= (index * 0.25) ? "1" : "0.3"}
            transition="opacity 0.2s ease"
            transform="translateX(-50%)"
            textAlign="center"
          >
            🚉
            <Text fontSize="0.6rem" color="gray.600" mt={1}>
              {station}
            </Text>
          </Box>
        ))}
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
