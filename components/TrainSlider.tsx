import { Box, keyframes, Tooltip } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";

const smokeAnimation = keyframes`
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-15px) scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-30px) scale(1.8);
    opacity: 0;
  }
`;

// Function to create wagon wobble animation with specific offset
const createWagonWobbleAnimation = (baseOffset: number) => keyframes`
  0%, 100% {
    transform: translateY(${baseOffset}px) rotate(0deg);
  }
  25% {
    transform: translateY(${baseOffset - 1}px) rotate(0.5deg);
  }
  50% {
    transform: translateY(${baseOffset}px) rotate(0deg);
  }
  75% {
    transform: translateY(${baseOffset + 1}px) rotate(-0.5deg);
  }
`;

// Reusable City Building component - optimized for performance
const CityBuilding = ({
  building,
  buildingId,
  windowCount = 3,
}: {
  building: { left: string; width: string; height: string; color: string };
  buildingId: string;
  windowCount?: number;
}) => {
  // Reduce window count on mobile for better performance
  const isMobileDevice =
    typeof window !== "undefined" && window.innerWidth <= 768;
  const actualWindowCount = isMobileDevice
    ? Math.min(2, windowCount)
    : windowCount;

  return (
    <Box
      position="absolute"
      bottom="8px"
      left={building.left}
      width={building.width}
      height={building.height}
      backgroundColor={building.color}
      opacity="0.8"
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      {/* Building windows */}
      {[...Array(actualWindowCount)].map((_, j) => (
        <Box
          key={`${buildingId}-window-${j}`}
          position="absolute"
          top={`${8 + j * 6}px`}
          left="2px"
          width="2px"
          height="2px"
          backgroundColor="#FFD700"
          opacity="0.6"
        />
      ))}
    </Box>
  );
};

// Helper function to get farm element emoji
const getFarmElementEmoji = (elementType: number): string => {
  switch (elementType) {
    case 0:
      return "🐄";
    case 1:
      return "🌾";
    case 2:
      return "🐎";
    case 3:
      return "🌽";
    case 4:
      return "🐑";
    default:
      return "🚜";
  }
};

// Helper function to get tree type emoji
const getTreeEmoji = (treeType: number): string => {
  switch (treeType) {
    case 0:
      return "🌲";
    case 1:
      return "🌳";
    default:
      return "🌿";
  }
};

// Helper function to get scenic element emoji
const getScenicElementEmoji = (elementType: number): string => {
  switch (elementType) {
    case 0:
      return "🏔️";
    case 1:
      return "🦅";
    default:
      return "🌲";
  }
};

// Wagon configurations
const wagonConfigs = [
  {
    emoji: "🚃",
    size: "1.8rem",
    offset: 5,
    duration: "0.7s",
    delay: "0.3s",
    wheelLeft: "6px",
    wheelRight: "6px",
  },
  {
    emoji: "🚃",
    size: "1.8rem",
    offset: 5,
    duration: "0.7s",
    delay: "0.2s",
    wheelLeft: "6px",
    wheelRight: "6px",
  },
  {
    emoji: "🚃",
    size: "1.8rem",
    offset: 5,
    duration: "0.9s",
    delay: "0.1s",
    wheelLeft: "6px",
    wheelRight: "6px",
  },
];

const locomotiveWobbleAnimation = keyframes`
  0%, 100% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(-1) translateY(-1px) rotate(-0.5deg);
  }
  50% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  75% {
    transform: scaleX(-1) translateY(1px) rotate(0.5deg);
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

// Reusable Wagon component - optimized for performance
const Wagon = ({
  config,
  animationIndex,
  scrollProgress,
  wagonAnimations,
}: {
  config: (typeof wagonConfigs)[0];
  animationIndex: number;
  scrollProgress: number;
  wagonAnimations: any[];
}) => {
  // Detect mobile for reduced animations
  const isMobileDevice =
    typeof window !== "undefined" &&
    (window.innerWidth <= 768 || "ontouchstart" in window);

  return (
    <Box
      position="relative"
      fontSize={config.size}
      marginRight="1px"
      animation={
        scrollProgress > 0.05 && !isMobileDevice
          ? `${wagonAnimations[animationIndex]} ${config.duration} infinite`
          : "none"
      }
      style={{
        animationDelay: config.delay,
        transform: "translate3d(0, 0, 0)", // Hardware acceleration
      }}
      transform={
        scrollProgress <= 0.05 ? `translateY(${config.offset}px)` : "none"
      }
    >
      {config.emoji}
      {/* Wagon wheels - simplified on mobile */}
      {!isMobileDevice && (
        <>
          <Box
            position="absolute"
            bottom="-1px"
            left={config.wheelLeft}
            fontSize="0.5rem"
            animation={
              scrollProgress > 0.05
                ? `${wheelRotateAnimation} 0.3s infinite linear`
                : "none"
            }
          >
            ⚙️
          </Box>
          <Box
            position="absolute"
            bottom="-1px"
            right={config.wheelRight}
            fontSize="0.5rem"
            animation={
              scrollProgress > 0.05
                ? `${wheelRotateAnimation} 0.3s infinite linear`
                : "none"
            }
            style={{ animationDelay: "0.1s" }}
          >
            ⚙️
          </Box>
        </>
      )}
    </Box>
  );
};

interface TrainSliderProps {
  scrollProgress: number;
}

export const TrainSlider: React.FC<TrainSliderProps> = ({ scrollProgress }) => {
  // Dragging and progress change handlers removed
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize wagon animations to prevent recreation on every render
  const wagonAnimations = useMemo(
    () =>
      wagonConfigs.map((config) => createWagonWobbleAnimation(config.offset)),
    []
  );

  // Throttle speed lines animation timestamp to reduce re-renders
  const [animationTime, setAnimationTime] = useState(0);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    if (!isClient || scrollProgress <= 0.1) return;
    const updateTime = () => {
      const now = Date.now();
      if (now - lastUpdateRef.current > 100) {
        // Throttle to 10fps instead of 60fps
        setAnimationTime(now);
        lastUpdateRef.current = now;
      }
    };
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, [scrollProgress, isClient]);

  // Memoize complex speed lines calculations
  const speedLines = useMemo(() => {
    if (!isClient || scrollProgress <= 0.1 || isMobile) return [];
    const trainPositionPercent = scrollProgress * 100;
    const lines = [];
    // Reduce number of speed lines on mobile for better performance
    const lineCount = isMobile ? 4 : 6;
    for (let i = 0; i < lineCount; i++) {
      const baseOffset = i * 1.5;
      const randomOffset = Math.sin(animationTime * 0.0003 + i * 1.5) * 1.5;
      const lineOffsetPercent = baseOffset + randomOffset;
      const lineLeftPercent = trainPositionPercent - lineOffsetPercent;
      if (lineLeftPercent < -10 || lineLeftPercent > 110) continue;
      const randomVertical = Math.sin(animationTime * 0.0002 + i * 2) * 3;
      const verticalPosition = i * 3 + randomVertical;
      const screenWidthPx =
        typeof window !== "undefined" ? window.innerWidth : 1200;
      const locomotiveWidthPercent = (50 / screenWidthPx) * 100;
      const baseWidth = 25 + Math.sin(animationTime * 0.0004 + i * 0.8) * 8;
      const randomWidth = baseWidth + locomotiveWidthPercent;
      const randomOpacity =
        0.25 + Math.sin(animationTime * 0.0003 + i * 1.2) * 0.1;
      const randomDuration =
        0.9 + Math.sin(animationTime * 0.0002 + i * 0.6) * 0.3;
      const randomDelay = Math.sin(animationTime * 0.0001 + i * 0.9) * 0.2;
      lines.push({
        id: `speed-line-${i}-${Math.round(lineLeftPercent * 5)}`,
        bottom: Math.max(0, verticalPosition),
        left: lineLeftPercent,
        width: randomWidth,
        opacity: randomOpacity,
        duration: randomDuration,
        delay: randomDelay,
      });
    }
    return lines;
  }, [scrollProgress, animationTime, isMobile, isClient]);

  // Memoize landscape elements to reduce DOM complexity
  const landscapeElements = useMemo(() => {
    if (!isClient) return { trees: [], farmElements: [], scenicElements: [] };
    const treeCount = isMobile ? 5 : 8;
    const farmCount = isMobile ? 12 : 20;
    const scenicCount = isMobile ? 4 : 6;
    return {
      trees: [...Array(treeCount)].map((_, i) => ({
        id: `tree-${i}`,
        left: i * (96 / treeCount) + Math.sin(i * 2) * 3,
        height: 14 + Math.sin(i * 1.5) * 5,
        bottom: 15 + Math.sin(i * 0.8) * 3,
        emoji: getTreeEmoji(i % 3),
      })),
      farmElements: [...Array(farmCount)].map((_, i) => ({
        id: `farm-${i}`,
        left: i * (90 / farmCount) + Math.sin(i * 2) * 2,
        height: 10 + Math.sin(i * 1.5) * 3,
        bottom: 15 + Math.sin(i * 0.8) * 2,
        emoji: getFarmElementEmoji(i % 6),
      })),
      scenicElements: [...Array(scenicCount)].map((_, i) => ({
        id: `scenic-${i}`,
        left: i * (85 / scenicCount) + Math.sin(i * 3) * 5,
        height: 12 + Math.sin(i * 2) * 3,
        bottom: 15 + Math.sin(i * 1.5) * 3,
        emoji: getScenicElementEmoji(i % 3),
      })),
    };
  }, [isMobile, isClient]);

  // Drag and progress change handlers removed

  if (!isClient) return null;

  return (
    <Tooltip
      label="Train journey visual only"
      placement="top"
      bg="gray.800"
      color="white"
      fontSize="sm"
      px={3}
      py={2}
      borderRadius="md"
      isOpen={showTooltip}
      hasArrow
    >
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        height="80px"
        zIndex={1}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Sky background - top 50% only */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="50%"
          background="linear-gradient(to bottom, rgba(87, 160, 235, 0.4) 0%, rgba(135, 206, 250, 0.7) 40%, rgba(176, 224, 255, 0.8) 70%, rgba(240, 248, 255, 0.9) 100%)"
          backdropFilter={isMobile ? "none" : "blur(2px)"}
          style={{ willChange: "transform" }}
        />

        {/* White background - bottom 50% */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="50%"
          backgroundColor="#7CB342"
          opacity={1}
        />

        {/* Sun */}
        <Box
          position="absolute"
          top="5px"
          right="15%"
          width="25px"
          height="25px"
          backgroundColor="#FFD700"
          borderRadius="50%"
          boxShadow="0 0 15px rgba(255, 215, 0, 0.4)"
          zIndex={1}
          opacity="0.8"
        />

        {/* Toronto city skyline at start */}
        <Box
          position="absolute"
          bottom="8px"
          left="0"
          width="5%"
          height="65px"
          overflow="hidden"
          zIndex={2}
          opacity="0.7"
        >
          {/* CN Tower */}
          <Box
            position="absolute"
            bottom="8px"
            left="30%"
            width="3px"
            height="45px"
            backgroundColor="#C0C0C0"
          >
            {/* CN Tower pod */}
            <Box
              position="absolute"
              top="30px"
              left="-2px"
              width="7px"
              height="6px"
              backgroundColor="#E0E0E0"
              borderRadius="50%"
            />
          </Box>

          {/* City buildings */}
          {[
            { left: "10%", width: "8px", height: "35px", color: "#4A4A4A" },
            { left: "20%", width: "10px", height: "45px", color: "#5A5A5A" },
            { left: "40%", width: "12px", height: "40px", color: "#6A6A6A" },
            { left: "55%", width: "9px", height: "38px", color: "#4A4A4A" },
            { left: "67%", width: "11px", height: "42px", color: "#5A5A5A" },
            { left: "80%", width: "8px", height: "32px", color: "#6A6A6A" },
          ].map((building, i) => (
            <CityBuilding
              key={`toronto-building-${building.left}-${i}`}
              building={building}
              buildingId={`toronto-building-${i}`}
              windowCount={3}
            />
          ))}
        </Box>

        {/* Trees and lakes background for first quarter */}
        <Box
          position="absolute"
          bottom="15px"
          left="5%"
          width="20%"
          height="60px"
          overflow="hidden"
          zIndex={2}
          opacity="0.7"
        >
          {/* Rolling hills background */}
          <Box
            position="absolute"
            bottom="22px"
            left="0"
            width="100%"
            height="20px"
            backgroundColor="#7CB342"
            opacity="0.6"
            style={{
              clipPath:
                "polygon(0 100%, 15% 30%, 35% 50%, 55% 20%, 75% 40%, 90% 25%, 100% 35%, 100% 100%)",
            }}
          />

          {/* Dense forest background layer */}
          <Box
            position="absolute"
            bottom="28px"
            left="0"
            width="100%"
            height="15px"
            backgroundColor="#5D8A3A"
            opacity="0.5"
            style={{
              clipPath:
                "polygon(0 100%, 12% 40%, 28% 60%, 45% 30%, 62% 55%, 78% 35%, 95% 45%, 100% 100%)",
            }}
          />

          {/* Lakes */}
          <Box
            position="absolute"
            bottom="12px"
            left="5%"
            width="15%"
            height="8px"
            backgroundColor="#4A90E2"
            borderRadius="50px"
            opacity="0.8"
          />
          <Box
            position="absolute"
            bottom="6px"
            left="60%"
            width="20%"
            height="6px"
            backgroundColor="#4A90E2"
            borderRadius="50px"
            opacity="0.7"
          />

          {/* Additional small pond */}
          <Box
            position="absolute"
            bottom="8px"
            left="35%"
            width="12%"
            height="4px"
            backgroundColor="#4A90E2"
            borderRadius="50px"
            opacity="0.6"
          />

          {/* Dense forest trees - first layer */}
          {[...Array(15)].map((_, i) => (
            <Box
              key={`forest-tree-${i}`}
              position="absolute"
              bottom={`${18 + Math.sin(i * 1.2) * 4}px`}
              left={`${i * 6.5 + Math.sin(i * 2.1) * 3}%`}
              fontSize={`${12 + Math.sin(i * 1.8) * 3}px`}
              opacity="0.8"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {i % 4 === 0
                ? "🌲"
                : i % 4 === 1
                ? "🌳"
                : i % 4 === 2
                ? "🌿"
                : "🌲"}
            </Box>
          ))}

          {/* Dense forest trees - second layer (background) */}
          {[...Array(12)].map((_, i) => (
            <Box
              key={`forest-bg-${i}`}
              position="absolute"
              bottom={`${25 + Math.sin(i * 1.5) * 3}px`}
              left={`${i * 8 + Math.sin(i * 2.5) * 4}%`}
              fontSize={`${8 + Math.sin(i * 1.3) * 2}px`}
              opacity="0.5"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))"
            >
              {i % 3 === 0 ? "🌲" : i % 3 === 1 ? "🌳" : "🌿"}
            </Box>
          ))}

          {/* Original trees layer (foreground) */}
          {landscapeElements.trees.map((tree) => (
            <Box
              key={tree.id}
              position="absolute"
              bottom={`${tree.bottom}px`}
              left={`${tree.left}%`}
              fontSize={`${tree.height}px`}
              opacity="0.9"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
            >
              {tree.emoji}
            </Box>
          ))}

          {/* Forest undergrowth */}
          {[...Array(8)].map((_, i) => (
            <Box
              key={`undergrowth-${i}`}
              position="absolute"
              bottom={`${15 + Math.sin(i * 0.8) * 2}px`}
              left={`${i * 12 + Math.sin(i * 3) * 2}%`}
              fontSize="8px"
              opacity="0.6"
            >
              🌿
            </Box>
          ))}
        </Box>

        {/* Farm landscape for second quarter */}
        <Box
          position="absolute"
          bottom="15px"
          left="25%"
          width="50%"
          height="60px"
          overflow="hidden"
          zIndex={2}
          opacity="0.7"
        >
          {/* Farm fields */}
          <Box
            position="absolute"
            bottom="15px"
            left="10%"
            width="30%"
            height="8px"
            backgroundColor="#8BC34A"
            borderRadius="2px"
            opacity="0.8"
          />
          <Box
            position="absolute"
            bottom="15px"
            left="45%"
            width="35%"
            height="10px"
            backgroundColor="#9CCC65"
            borderRadius="2px"
            opacity="0.7"
          />

          {/* Barn */}
          <Box
            position="absolute"
            bottom="18px"
            left="15%"
            width="15px"
            height="12px"
            backgroundColor="#8D6E63"
            borderRadius="2px"
          >
            {/* Barn roof */}
            <Box
              position="absolute"
              top="-6px"
              left="-1px"
              width="17px"
              height="8px"
              backgroundColor="#D32F2F"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            />
          </Box>

          {/* Farm animals and crops */}
          {landscapeElements.farmElements.map((element) => (
            <Box
              key={element.id}
              position="absolute"
              bottom={`${element.bottom}px`}
              left={`${element.left}%`}
              fontSize={`${element.height}px`}
              opacity="0.7"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {element.emoji}
            </Box>
          ))}

          {/* Fence posts */}
          {[...Array(8)].map((_, i) => (
            <Box
              key={`fence-post-${i}-${5 + i * 12}`}
              position="absolute"
              bottom="15px"
              left={`${5 + i * 12}%`}
              width="2px"
              height="8px"
              backgroundColor="#8D6E63"
              opacity="0.6"
            />
          ))}
        </Box>

        {/* Lake and mountains landscape */}
        <Box
          position="absolute"
          bottom="15px"
          left="75%"
          width="20%"
          height="60px"
          overflow="hidden"
          zIndex={2}
          opacity="0.7"
        >
          {/* Mountain ranges */}
          <Box
            position="absolute"
            bottom="18px"
            left="0"
            width="100%"
            height="25px"
            backgroundColor="#6B7C93"
            opacity="0.6"
            style={{
              clipPath:
                "polygon(0 100%, 20% 10%, 40% 40%, 60% 0%, 80% 30%, 100% 20%, 100% 100%)",
            }}
          />
          <Box
            position="absolute"
            bottom="22px"
            left="0"
            width="100%"
            height="20px"
            backgroundColor="#8B9DC3"
            opacity="0.5"
            style={{
              clipPath:
                "polygon(0 100%, 25% 20%, 50% 0%, 75% 25%, 100% 5%, 100% 100%)",
            }}
          />

          {/* Large lake */}
          <Box
            position="absolute"
            bottom="6px"
            left="10%"
            width="80%"
            height="10px"
            backgroundColor="#2E7DD2"
            borderRadius="20px"
            opacity="0.8"
          />

          {/* Reflective water shimmer */}
          <Box
            position="absolute"
            bottom="8px"
            left="15%"
            width="70%"
            height="2px"
            backgroundColor="#87CEEB"
            opacity="0.6"
            borderRadius="2px"
          />

          {/* Scenic elements */}
          {landscapeElements.scenicElements.map((element) => (
            <Box
              key={element.id}
              position="absolute"
              bottom={`${element.bottom}px`}
              left={`${element.left}%`}
              fontSize={`${element.height}px`}
              opacity="0.7"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {element.emoji}
            </Box>
          ))}
        </Box>

        {/* Vancouver city skyline at end */}
        <Box
          position="absolute"
          bottom="8px"
          left="95%"
          width="5%"
          height="65px"
          overflow="hidden"
          zIndex={2}
          opacity="0.7"
        >
          {/* Mountains backdrop */}
          <Box
            position="absolute"
            bottom="30px"
            left="0"
            width="100%"
            height="28px"
            backgroundColor="#6B7C93"
            opacity="0.4"
            style={{
              clipPath:
                "polygon(0 100%, 30% 0%, 60% 20%, 80% 0%, 100% 10%, 100% 100%)",
            }}
          />

          {/* City buildings */}
          {[
            { left: "5%", width: "9px", height: "42px", color: "#4A4A4A" },
            { left: "18%", width: "11px", height: "50px", color: "#5A5A5A" },
            { left: "32%", width: "10px", height: "38px", color: "#6A6A6A" },
            { left: "45%", width: "12px", height: "55px", color: "#4A4A4A" },
            { left: "60%", width: "8px", height: "35px", color: "#5A5A5A" },
            { left: "72%", width: "10px", height: "45px", color: "#6A6A6A" },
            { left: "85%", width: "9px", height: "40px", color: "#4A4A4A" },
          ].map((building, i) => (
            <CityBuilding
              key={`vancouver-building-${building.left}-${i}`}
              building={building}
              buildingId={`vancouver-building-${i}`}
              windowCount={4}
            />
          ))}

          {/* City elements */}
          <Box
            position="absolute"
            bottom="18px"
            left="15%"
            fontSize="10px"
            opacity="0.7"
          >
            🌊
          </Box>
          <Box
            position="absolute"
            bottom="32px"
            left="70%"
            fontSize="8px"
            opacity="0.6"
          >
            🏔️
          </Box>
        </Box>

        {/* Rail bed/gravel */}
        <Box
          position="absolute"
          bottom="0"
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
          bottom="5px"
          left="0"
          right="0"
          height="14px"
          backgroundColor="gray.400"
          borderRadius="2px"
          overflow="hidden"
          // cursor and click removed
          transition="background-color 0.2s ease"
        >
          {/* Animated rail shine effect - disabled on mobile */}
          {!isMobile && (
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
          )}

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

        {/* Enhanced train with multiple smoke puffs and wobble */}
        <Box
          position="absolute"
          bottom="13px"
          left={`calc(${scrollProgress * 85}% + ${scrollProgress * 5}px)`}
          fontSize={isMobile ? "2rem" : "2.2rem"}
          filter={isMobile ? "none" : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}
          zIndex={3}
          // cursor and drag removed
          userSelect="none"
          style={{
            transform: "translate3d(0, 0, 0)", // Enable hardware acceleration
          }}
        >
          {/* Multiple smoke puffs - reduced on mobile */}
          {(isMobile ? [] : ["smoke-1", "smoke-2", "smoke-3", "smoke-4"]).map(
            (smokeId, i) => {
              return (
                <Box
                  key={smokeId}
                  position="absolute"
                  top={`${-4 - i * 5}px`}
                  left={`${100 + i * 3}px`}
                  animation={
                    scrollProgress > 0.05
                      ? `${smokeAnimation} ${1.5 + i * 0.2}s infinite`
                      : "none"
                  }
                  opacity="0.7"
                  fontSize={isMobile ? "0.8rem" : "1.0rem"}
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    transform: "translate3d(0, 0, 0)", // Hardware acceleration
                  }}
                >
                  💨
                </Box>
              );
            }
          )}

          {/* Train cars */}
          <Box display="flex" alignItems="center">
            {/* Render wagons using the reusable component */}
            {wagonConfigs.map((config, index) => (
              <Wagon
                key={`wagon-${config.emoji}-${config.duration}-${index}`}
                config={config}
                animationIndex={index}
                scrollProgress={scrollProgress}
                wagonAnimations={wagonAnimations}
              />
            ))}

            {/* Locomotive */}
            <Box
              position="relative"
              fontSize={isMobile ? "2rem" : "2.2rem"}
              animation={
                !isMobile
                  ? `${locomotiveWobbleAnimation} 0.6s infinite`
                  : "none"
              }
              style={{
                transform: isMobile
                  ? "scaleX(-1) translate3d(0, 0, 0)"
                  : "translate3d(0, 0, 0)",
              }}
            >
              🚂
              {/* Animated wheels - simplified on mobile */}
              {!isMobile && (
                <>
                  <Box
                    position="absolute"
                    bottom="-1px"
                    left="7px"
                    fontSize="0.5rem"
                    animation={
                      scrollProgress > 0.05
                        ? `${wheelRotateAnimation} 0.3s infinite linear`
                        : "none"
                    }
                  >
                    ⚙️
                  </Box>
                  <Box
                    position="absolute"
                    bottom="-1px"
                    right="7px"
                    fontSize="0.5rem"
                    animation={
                      scrollProgress > 0.05
                        ? `${wheelRotateAnimation} 0.3s infinite linear`
                        : "none"
                    }
                    style={{ animationDelay: "0.15s" }}
                  >
                    ⚙️
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>

        {/* Speed lines effect - optimized */}
        {scrollProgress > 0.1 && speedLines.length > 0 && (
          <Box
            position="absolute"
            bottom="35px"
            left="0"
            width="100%"
            height="20px"
            overflow="hidden"
            zIndex={1}
          >
            {speedLines.map((line) => (
              <Box
                key={line.id}
                position="absolute"
                bottom={`${line.bottom}px`}
                left={`${line.left}%`}
                width={`${line.width}px`}
                height="2px"
                backgroundColor={`rgba(100,100,100,${line.opacity})`}
                animation={`${speedLinesAnimation} ${line.duration}s infinite linear`}
                style={{
                  animationDelay: `${line.delay}s`,
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Tooltip>
  );
};
