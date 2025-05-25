import { Box, keyframes, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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

const trainWobbleAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-1px) rotate(0.5deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateY(1px) rotate(-0.5deg);
  }
`;

const locomotiveWobbleAnimation = keyframes`
  0%, 100% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  25% {
    transform: scaleX(-1) translateY(-1px) rotate(0.5deg);
  }
  50% {
    transform: scaleX(-1) translateY(0px) rotate(0deg);
  }
  75% {
    transform: scaleX(-1) translateY(1px) rotate(-0.5deg);
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

interface TrainSliderProps {
  scrollProgress: number;
  onProgressChange: (progress: number) => void;
}

export const TrainSlider: React.FC<TrainSliderProps> = ({
  scrollProgress,
  onProgressChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartProgress, setDragStartProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleRailClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickProgress = clickX / rect.width;
    onProgressChange(clickProgress);
  };

  const handleTrainMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartProgress(scrollProgress);
  };

  const handleTrainTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setDragStartX(event.touches[0].clientX);
    setDragStartProgress(scrollProgress);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStartX;
    const trackWidth = window.innerWidth;
    const deltaProgress = deltaX / trackWidth;
    const newProgress = Math.max(0, Math.min(1, dragStartProgress + deltaProgress));
    
    onProgressChange(newProgress);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging) return;
    event.preventDefault();

    const deltaX = event.touches[0].clientX - dragStartX;
    const trackWidth = window.innerWidth;
    const deltaProgress = deltaX / trackWidth;
    const newProgress = Math.max(0, Math.min(1, dragStartProgress + deltaProgress));
    
    onProgressChange(newProgress);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      document.body.style.touchAction = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    };
  }, [isDragging, dragStartX, dragStartProgress]);

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="80px"
      zIndex={1}
    >
      {/* Sky background - more transparent and blended */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="100%"
        background="linear-gradient(to bottom, rgba(135, 206, 235, 0.3) 0%, rgba(224, 246, 255, 0.6) 50%, rgba(255, 255, 255, 0.8) 100%)"
        backdropFilter="blur(2px)"
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
          { left: "10%", width: "8px", height: "25px", color: "#4A4A4A" },
          { left: "20%", width: "10px", height: "32px", color: "#5A5A5A" },
          { left: "40%", width: "12px", height: "28px", color: "#6A6A6A" },
          { left: "55%", width: "9px", height: "26px", color: "#4A4A4A" },
          { left: "67%", width: "11px", height: "30px", color: "#5A5A5A" },
          { left: "80%", width: "8px", height: "22px", color: "#6A6A6A" },
        ].map((building, i) => (
          <Box
            key={`toronto-${i}`}
            position="absolute"
            bottom="8px"
            left={building.left}
            width={building.width}
            height={building.height}
            backgroundColor={building.color}
            opacity="0.8"
          >
            {/* Building windows */}
            {[...Array(3)].map((_, j) => (
              <Box
                key={j}
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
          height="12px"
          backgroundColor="#7CB342"
          opacity="0.6"
          style={{
            clipPath: "polygon(0 100%, 15% 50%, 35% 70%, 55% 40%, 75% 60%, 90% 45%, 100% 55%, 100% 100%)"
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
        
        {/* Trees */}
        {[...Array(8)].map((_, i) => {
          const leftPercent = (i * 12) + (Math.sin(i * 2) * 3);
          const height = 14 + (Math.sin(i * 1.5) * 5);
          const bottom = 15 + (Math.sin(i * 0.8) * 3);
          const treeType = i % 3;
          
          return (
            <Box
              key={i}
              position="absolute"
              bottom={`${bottom}px`}
              left={`${leftPercent}%`}
              fontSize={`${height}px`}
              opacity="0.7"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {treeType === 0 ? '🌲' : treeType === 1 ? '🌳' : '🌿'}
            </Box>
          );
        })}
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
        {/* Rolling hills */}
        <Box
          position="absolute"
          bottom="22px"
          left="0"
          width="100%"
          height="8px"
          backgroundColor="#7CB342"
          opacity="0.6"
          style={{
            clipPath: "polygon(0 100%, 20% 40%, 40% 60%, 60% 30%, 80% 50%, 100% 40%, 100% 100%)"
          }}
        />
        
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
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
            }}
          />
        </Box>
        
        {/* Farm animals and crops */}
        {[...Array(20)].map((_, i) => {
          const leftPercent = (i * 4.5) + (Math.sin(i * 2) * 2);
          const height = 10 + (Math.sin(i * 1.5) * 3);
          const bottom = 15 + (Math.sin(i * 0.8) * 2);
          const elementType = i % 6;
          
          return (
            <Box
              key={i}
              position="absolute"
              bottom={`${bottom}px`}
              left={`${leftPercent}%`}
              fontSize={`${height}px`}
              opacity="0.7"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {elementType === 0 ? '🐄' : 
               elementType === 1 ? '🌾' : 
               elementType === 2 ? '🐎' : 
               elementType === 3 ? '🌽' : 
               elementType === 4 ? '🐑' : '🚜'}
            </Box>
          );
        })}
        
        {/* Fence posts */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={`fence-${i}`}
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
          height="15px"
          backgroundColor="#6B7C93"
          opacity="0.6"
          style={{
            clipPath: "polygon(0 100%, 20% 30%, 40% 60%, 60% 20%, 80% 50%, 100% 40%, 100% 100%)"
          }}
        />
        <Box
          position="absolute"
          bottom="22px"
          left="0"
          width="100%"
          height="10px"
          backgroundColor="#8B9DC3"
          opacity="0.5"
          style={{
            clipPath: "polygon(0 100%, 25% 40%, 50% 10%, 75% 45%, 100% 25%, 100% 100%)"
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
        {[...Array(6)].map((_, i) => {
          const leftPercent = (i * 15) + (Math.sin(i * 3) * 5);
          const height = 12 + (Math.sin(i * 2) * 3);
          const bottom = 15 + (Math.sin(i * 1.5) * 3);
          const elementType = i % 3;
          
          return (
            <Box
              key={i}
              position="absolute"
              bottom={`${bottom}px`}
              left={`${leftPercent}%`}
              fontSize={`${height}px`}
              opacity="0.7"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))"
            >
              {elementType === 0 ? '🏔️' : elementType === 1 ? '🦅' : '🌲'}
            </Box>
          );
        })}
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
          height="18px"
          backgroundColor="#6B7C93"
          opacity="0.4"
          style={{
            clipPath: "polygon(0 100%, 30% 20%, 60% 40%, 80% 10%, 100% 30%, 100% 100%)"
          }}
        />
        
        {/* City buildings */}
        {[
          { left: "5%", width: "9px", height: "30px", color: "#4A4A4A" },
          { left: "18%", width: "11px", height: "35px", color: "#5A5A5A" },
          { left: "32%", width: "10px", height: "26px", color: "#6A6A6A" },
          { left: "45%", width: "12px", height: "38px", color: "#4A4A4A" },
          { left: "60%", width: "8px", height: "24px", color: "#5A5A5A" },
          { left: "72%", width: "10px", height: "32px", color: "#6A6A6A" },
          { left: "85%", width: "9px", height: "28px", color: "#4A4A4A" },
        ].map((building, i) => (
          <Box
            key={`vancouver-${i}`}
            position="absolute"
            bottom="8px"
            left={building.left}
            width={building.width}
            height={building.height}
            backgroundColor={building.color}
            opacity="0.8"
          >
            {/* Building windows */}
            {[...Array(4)].map((_, j) => (
              <Box
                key={j}
                position="absolute"
                top={`${6 + j * 5}px`}
                left="2px"
                width="2px"
                height="2px"
                backgroundColor="#FFD700"
                opacity="0.6"
              />
            ))}
          </Box>
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


      {/* Enhanced train with multiple smoke puffs and wobble */}
      <Tooltip
        label="Drag the train or click on the rails to navigate through the journey"
        placement="top"
        bg="gray.800"
        color="white"
        fontSize="sm"
        px={3}
        py={2}
        borderRadius="md"
        isOpen={showTooltip && !isDragging}
        hasArrow
      >
        <Box
          position="absolute"
          bottom="13px"
          left={`${scrollProgress * 100}%`}
          transition="left 0.1s ease-out"
          fontSize="2.2rem"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          zIndex={3}
          transform={`translateX(-${scrollProgress * 100}%)`}
          cursor={isDragging ? 'grabbing' : 'grab'}
          onMouseDown={handleTrainMouseDown}
          onTouchStart={handleTrainTouchStart}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          userSelect="none"
          style={{ touchAction: 'none' }}
        >
          {/* Multiple smoke puffs */}
          {[...Array(4)].map((_, i) => {
            return (
              <Box
                key={i}
                position="absolute"
                top={`${-4 - i * 5}px`}
                left={`${100 + i * 3}px`}
                animation={scrollProgress > 0.05 ? `${smokeAnimation} ${1.5 + i * 0.2}s infinite` : 'none'}
                opacity="0.7"
                fontSize="1.0rem"
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                💨
              </Box>
            );
          })}
          
          {/* Train cars */}
          <Box display="flex" alignItems="center">
            {/* Wagon 1 */}
            <Box 
              position="relative" 
              fontSize="1.6rem" 
              marginRight="1px"
              animation={scrollProgress > 0.05 ? `${trainWobbleAnimation} 0.8s infinite` : 'none'}
              style={{ animationDelay: '0.3s' }}
            >
              🚋
              {/* Wagon wheels */}
              <Box
                position="absolute"
                bottom="-2px"
                left="5px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
              >
                ⚙️
              </Box>
              <Box
                position="absolute"
                bottom="-2px"
                right="5px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
                style={{ animationDelay: '0.1s' }}
              >
                ⚙️
              </Box>
            </Box>
            
            {/* Wagon 2 */}
            <Box 
              position="relative" 
              fontSize="1.8rem" 
              marginRight="1px"
              animation={scrollProgress > 0.05 ? `${trainWobbleAnimation} 0.7s infinite` : 'none'}
              style={{ animationDelay: '0.2s' }}
            >
              🚃
              {/* Wagon wheels */}
              <Box
                position="absolute"
                bottom="-2px"
                left="6px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
              >
                ⚙️
              </Box>
              <Box
                position="absolute"
                bottom="-2px"
                right="6px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
                style={{ animationDelay: '0.05s' }}
              >
                ⚙️
              </Box>
            </Box>
            
            {/* Wagon 3 */}
            <Box 
              position="relative" 
              fontSize="1.8rem" 
              marginRight="1px"
              animation={scrollProgress > 0.05 ? `${trainWobbleAnimation} 0.9s infinite` : 'none'}
              style={{ animationDelay: '0.1s' }}
            >
              🚃
              {/* Wagon wheels */}
              <Box
                position="absolute"
                bottom="-2px"
                left="6px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
              >
                ⚙️
              </Box>
              <Box
                position="absolute"
                bottom="-2px"
                right="6px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
                style={{ animationDelay: '0.2s' }}
              >
                ⚙️
              </Box>
            </Box>
            
            {/* Locomotive */}
            <Box 
              position="relative" 
              fontSize="2.2rem"
              animation={scrollProgress > 0.05 ? `${locomotiveWobbleAnimation} 0.6s infinite` : 'none'}
              transform={scrollProgress <= 0.05 ? "scaleX(-1)" : "none"}
            >
              🚂
              {/* Animated wheels */}
              <Box
                position="absolute"
                bottom="-2px"
                left="7px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
              >
                ⚙️
              </Box>
              <Box
                position="absolute"
                bottom="-2px"
                right="7px"
                fontSize="0.5rem"
                animation={scrollProgress > 0.05 ? `${wheelRotateAnimation} 0.3s infinite linear` : 'none'}
                style={{ animationDelay: '0.15s' }}
              >
                ⚙️
              </Box>
            </Box>
          </Box>
        </Box>
      </Tooltip>

      {/* Speed lines effect */}
      {scrollProgress > 0.1 && (
        <Box
          position="absolute"
          bottom="35px"
          left="0"
          width="100%"
          height="20px"
          overflow="hidden"
          zIndex={1}
        >
          {[...Array(8)].map((_, i) => {
            const trainPositionPercent = scrollProgress * 100;
            
            const baseOffset = (i * 1.0); // Reduced from 2.5 to 1.0 to start closer to train
            const randomOffset = (Math.sin(Date.now() * 0.0003 + i * 1.5) * 1.5);
            const lineOffsetPercent = baseOffset + randomOffset;
            const lineLeftPercent = trainPositionPercent - lineOffsetPercent;
            
            const randomVertical = Math.sin(Date.now() * 0.0002 + i * 2) * 3;
            const verticalPosition = (i * 2.5) + randomVertical;
            
            // Extend width to reach 50px after locomotive
            const locomotiveWidthPx = 50;
            const screenWidthPx = window.innerWidth;
            const locomotiveWidthPercent = (locomotiveWidthPx / screenWidthPx) * 100;
            const baseWidth = 25 + (Math.sin(Date.now() * 0.0004 + i * 0.8) * 10);
            const randomWidth = baseWidth + locomotiveWidthPercent;
            
            const randomOpacity = 0.25 + (Math.sin(Date.now() * 0.0003 + i * 1.2) * 0.15);
            const randomDuration = 0.8 + (Math.sin(Date.now() * 0.0002 + i * 0.6) * 0.4);
            const randomDelay = Math.sin(Date.now() * 0.0001 + i * 0.9) * 0.2;
            
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

    </Box>
  );
};
