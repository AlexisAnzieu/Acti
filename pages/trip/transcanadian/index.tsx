/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, keyframes, Text } from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRef, useState } from "react";

import { Locale } from "../../../component/NavbarComponent";
import { getTransCanadianContent } from "./content/";

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
    flex="0 0 100vw"
    minWidth="100vw"
    height="100vh"
    scrollSnapAlign="start"
    backgroundColor={`hsl(${index * 45}, 85%, 97%)`}
    position="relative"
  >
    <Box
      height="100vh"
      overflowY="auto"
      padding="2rem"
      paddingBottom="140px"
      data-day-content
      sx={{
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
      <Box
        maxWidth="800px"
        margin="0 auto"
        paddingTop="2rem"
        animation={`${fadeInAnimation} 0.5s ease-out`}
      >
        <Heading mb={6} size="2xl" textAlign="center">
          {title}
        </Heading>
        {/* Render the ReactNode content directly */}
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
  </Box>
);

export default function TransCanadian() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  
  // Performance optimization: cache DOM elements
  const dayElementsRef = useRef<HTMLElement[]>([]);
  const animationFrameRef = useRef<number>();
  const isScrollingRef = useRef(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Detect mobile device
    isMobileRef.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                         ('ontouchstart' in window) || 
                         (window.innerWidth <= 768);
    
    const timer = setTimeout(() => setShowInstructions(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cache day content elements for performance
    const updateDayElementsCache = () => {
      dayElementsRef.current = Array.from(container.querySelectorAll('[data-day-content]')) as HTMLElement[];
    };
    
    updateDayElementsCache();

    // Common navigation helper functions
    const navigateToDay = (targetDay: number) => {
      const clampedDay = Math.max(0, Math.min(3, targetDay));
      if (clampedDay !== Math.floor(container.scrollLeft / window.innerWidth)) {
        isScrollingRef.current = true;
        container.scrollTo({
          left: clampedDay * window.innerWidth,
          behavior: "smooth"
        });
        setTimeout(() => { isScrollingRef.current = false; }, 600);
      }
    };

    const getCurrentDay = () => Math.floor(container.scrollLeft / window.innerWidth);

    const isAtVerticalBoundary = (element: HTMLElement, direction: 'top' | 'bottom') => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      return direction === 'top' ? scrollTop === 0 : scrollTop + clientHeight >= scrollHeight - 1;
    };

    // Optimized scroll progress calculation using requestAnimationFrame
    const updateScrollProgress = () => {
      if (!container) return;
      
      const { scrollLeft, clientWidth } = container;
      const dayPosition = scrollLeft / clientWidth;
      const currentDayIndex = Math.max(0, Math.min(3, Math.floor(dayPosition)));
      
      // Get vertical scroll progress for current day
      let verticalProgress = 0;
      const currentDayElement = dayElementsRef.current[currentDayIndex];
      
      if (currentDayElement) {
        const { scrollTop, scrollHeight, clientHeight } = currentDayElement;
        const maxScroll = Math.max(0, scrollHeight - clientHeight);
        verticalProgress = maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;
      }
      
      // Calculate combined progress more efficiently
      const dayProgressBase = currentDayIndex / 4; // 0, 0.25, 0.5, 0.75
      const dayProgressIncrement = verticalProgress / 4; // 0 to 0.25 within each day
      const totalProgress = Math.min(1, dayProgressBase + dayProgressIncrement);
      
      // Batch state updates
      setScrollProgress(totalProgress);
      setCurrentDay(currentDayIndex);
    };

    // Throttled scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(updateScrollProgress);
    };

    const handleWheel = (e: WheelEvent) => {
      // Skip wheel handling on mobile devices (they use touch)
      if (isMobileRef.current) return;
      
      const target = e.target as HTMLElement;
      const dayContentElement = target.closest('[data-day-content]') as HTMLElement;
      
      // Update progress immediately for real-time feedback
      handleScroll();
      
      if (!dayContentElement) {
        e.preventDefault();
        if (isScrollingRef.current) return;
        
        const currentDay = getCurrentDay();
        navigateToDay(currentDay + (e.deltaY > 0 ? 1 : -1));
        return;
      }

      const isAtTop = isAtVerticalBoundary(dayContentElement, 'top');
      const isAtBottom = isAtVerticalBoundary(dayContentElement, 'bottom');

      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && isAtBottom) {
        e.preventDefault();
        navigateToDay(getCurrentDay() + 1);
      } else if (e.deltaY < 0 && isAtTop) {
        e.preventDefault();
        navigateToDay(getCurrentDay() - 1);
      }
    };

    // Mouse interaction state
    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      if (isMobileRef.current) return; // Skip on mobile
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown || isMobileRef.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Reduced sensitivity
      container.scrollLeft = scrollLeft - walk;
      handleScroll();
    };

    // Touch interaction state
    let startY: number;
    let lastTouchX: number;
    let lastTouchY: number;
    let touchStartTime: number;
    let isHorizontalSwipe = false;

    const handleBoundaryNavigation = (deltaY: number, dayContentElement: HTMLElement) => {
      const isAtTop = isAtVerticalBoundary(dayContentElement, 'top');
      const isAtBottom = isAtVerticalBoundary(dayContentElement, 'bottom');
      
      if ((deltaY < -30 && isAtBottom) || (deltaY > 30 && isAtTop)) {
        if (isScrollingRef.current) return true;
        
        const currentDay = getCurrentDay();
        const targetDay = deltaY < -30 ? currentDay + 1 : currentDay - 1;
        
        if (targetDay >= 0 && targetDay <= 3 && targetDay !== currentDay) {
          isScrollingRef.current = true;
          isMouseDown = false; // Stop touch tracking
          navigateToDay(targetDay);
          handleScroll();
          return true;
        }
      }
      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return; // Only handle single touch
      
      const touch = e.touches[0];
      const target = e.target as HTMLElement;
      const dayContentElement = target.closest('[data-day-content]') as HTMLElement;
      
      startX = touch.pageX - container.offsetLeft;
      startY = touch.pageY;
      lastTouchX = touch.pageX;
      lastTouchY = touch.pageY;
      scrollLeft = container.scrollLeft;
      touchStartTime = Date.now();
      isHorizontalSwipe = false;
      isMouseDown = true;
      
      // Store initial day content scroll position for boundary detection
      if (dayContentElement) {
        (dayContentElement as any).initialScrollTop = dayContentElement.scrollTop;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMouseDown || e.touches.length !== 1) return;
      
      const touch = e.touches[0];
      const currentX = touch.pageX;
      const currentY = touch.pageY;
      const target = e.target as HTMLElement;
      const dayContentElement = target.closest('[data-day-content]') as HTMLElement;
      
      const deltaX = Math.abs(currentX - lastTouchX);
      const deltaY = Math.abs(currentY - lastTouchY);
      const totalDeltaY = currentY - startY;
      
      // Determine if this is a horizontal swipe (for day navigation)
      if (!isHorizontalSwipe && (deltaX > 10 || deltaY > 10)) {
        isHorizontalSwipe = deltaX > deltaY * 1.5; // Horizontal dominance
      }
      
      // Handle vertical scrolling within day content with boundary detection
      if (!isHorizontalSwipe && dayContentElement) {
        if (handleBoundaryNavigation(totalDeltaY, dayContentElement)) {
          e.preventDefault();
          return;
        }
      }
      
      // If it's a horizontal swipe, handle day navigation
      if (isHorizontalSwipe) {
        e.preventDefault();
        const x = currentX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Mobile-optimized sensitivity
        container.scrollLeft = scrollLeft - walk;
        handleScroll();
      }
      // Otherwise, let the browser handle vertical scrolling within day content
      
      lastTouchX = currentX;
      lastTouchY = currentY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isMouseDown) return;
      
      const touchDuration = Date.now() - touchStartTime;
      const touch = e.changedTouches[0];
      const deltaX = touch.pageX - (startX + container.offsetLeft);
      
      isMouseDown = false;
      
      // Handle quick swipe gestures for day navigation
      if (isHorizontalSwipe && touchDuration < 300 && Math.abs(deltaX) > 50) {
        e.preventDefault();
        const currentDay = getCurrentDay();
        navigateToDay(currentDay + (deltaX < -50 ? 1 : -1));
      } else if (isHorizontalSwipe) {
        // Snap to nearest day if not a quick swipe
        const currentScrollLeft = container.scrollLeft;
        const nearestDay = Math.round(currentScrollLeft / window.innerWidth);
        container.scrollTo({
          left: nearestDay * window.innerWidth,
          behavior: "smooth"
        });
      }
      
      handleScroll();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobileRef.current) return; // Skip on mobile
      const delta = window.innerWidth * 0.8;
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: delta, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -delta, behavior: "smooth" });
      }
    };

    // Event listeners with mobile-specific handling
    container.addEventListener("scroll", handleScroll, { passive: true });
    
    if (!isMobileRef.current) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp);
      container.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("keydown", handleKeyDown);
    }
    
    // Touch events for mobile
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });

    // Add scroll listeners to day content elements
    dayElementsRef.current.forEach(element => {
      element.addEventListener("scroll", handleScroll, { passive: true });
    });

    // Initial progress calculation
    updateScrollProgress();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      
      dayElementsRef.current.forEach(element => {
        element.removeEventListener("scroll", handleScroll);
        if (isMobileRef.current) {
          // Remove mobile-specific listeners if they exist
          const mobileHandler = (element as any).mobileScrollHandler;
          if (mobileHandler) {
            element.removeEventListener("scroll", mobileHandler);
          }
        }
      });
    };
  }, []);

  const currentContent = getTransCanadianContent("fr");

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
          cursor: isMobileRef.current ? "default" : "grab",
          scrollBehavior: "smooth",
          scrollSnapType: isMobileRef.current ? "x mandatory" : "x mandatory",
          touchAction: "pan-x pan-y", // Allow both horizontal and vertical panning
          "&:active": {
            cursor: isMobileRef.current ? "default" : "grabbing",
          },
          "@media (hover: none)": {
            scrollSnapType: "x proximity",
            cursor: "default",
          },
          // Improve touch responsiveness on mobile
          "@media (max-width: 768px)": {
            scrollSnapType: "x proximity",
            overscrollBehavior: "contain",
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
              const trainPositionPercent = scrollProgress * 85; // Match the train position calculation
              
              // Calculate train length based on visible cars
              const trainLength = 
                (scrollProgress > 0.2 ? 1 : 0) + 
                (scrollProgress > 0.5 ? 1 : 0) + 
                (scrollProgress > 0.8 ? 1 : 0);
              const trainWidthPercent = 2 + (trainLength * 1.5); // Approximate train width in percentage
              
              // Add randomness to positioning (slower updates)
              const baseOffset = -(5 + (i * 2.5));
              const randomOffset = (Math.sin(Date.now() * 0.0003 + i * 1.5) * 1.5); // Slower, smaller horizontal variation
              const lineOffsetPercent = baseOffset + randomOffset;
              const lineLeftPercent = trainPositionPercent - trainWidthPercent + lineOffsetPercent;
              
              // Random vertical positioning (slower)
              const randomVertical = Math.sin(Date.now() * 0.0002 + i * 2) * 3;
              const verticalPosition = (i * 2.5) + randomVertical;
              
              // Random line properties (slower changes)
              const randomWidth = 25 + (Math.sin(Date.now() * 0.0004 + i * 0.8) * 10); // 15-35px width, slower change
              const randomOpacity = 0.25 + (Math.sin(Date.now() * 0.0003 + i * 1.2) * 0.15); // 0.1-0.4 opacity, slower change
              const randomDuration = 0.8 + (Math.sin(Date.now() * 0.0002 + i * 0.6) * 0.4); // 0.8-1.2s duration (slower)
              const randomDelay = Math.sin(Date.now() * 0.0001 + i * 0.9) * 0.2; // Smaller delay variation
              
              // Only show lines that are within reasonable bounds (0% to 100%)
              if (lineLeftPercent < -10 || lineLeftPercent > 110) return null;
              
              return (
                <Box
                  key={i}
                  position="absolute"
                  bottom={`${Math.max(0, verticalPosition)}px`}
                  left={`${lineLeftPercent}%`} // Dynamic position based on train location in percentage
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

        {/* Enhanced train with multiple smoke puffs and wobble */}
        <Box
          position="absolute"
          bottom="54px"
          left={`${scrollProgress * 85}%`}
          animation={scrollProgress > 0.05 ? `${trainWobbleAnimation} 0.6s infinite` : 'none'}
          transition="left 0.1s ease-out" // Faster transition for real-time feel
          fontSize="2.2rem"
          filter="drop-shadow(0 3px 6px rgba(0,0,0,0.3))"
          zIndex={2}
          transform="translateX(-50%)" // Center the train on its position
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

        {/* Station markers */}
        {['Montréal', 'Ottawa', 'Toronto', 'Winnipeg', 'Vancouver'].map((station, index) => (
          <Box
            key={index}
            position="absolute"
            bottom="20px"
            left={`${index * 21.25}%`}
            fontSize="1.2rem"
            opacity={scrollProgress >= (index * 0.25) ? "1" : "0.3"}
            transition="opacity 0.2s ease" // Faster transition
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
