import { Box, keyframes, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
        onTouchStart={handleTrainTouchStart}
        userSelect="none"
        style={{ touchAction: 'none' }}
      >
        {/* Multiple smoke puffs */}
        {[...Array(4)].map((_, i) => {
          const trainLength = 
            (scrollProgress > 0.2 ? 1 : 0) + 
            (scrollProgress > 0.5 ? 1 : 0) + 
            (scrollProgress > 0.8 ? 1 : 0);
          const locomotiveOffset = trainLength * 35;
          
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
            const trainLength = 
              (scrollProgress > 0.2 ? 1 : 0) + 
              (scrollProgress > 0.5 ? 1 : 0) + 
              (scrollProgress > 0.8 ? 1 : 0);
            const trainWidthPercent = 2 + (trainLength * 1.5);
            
            const baseOffset = -(5 + (i * 2.5));
            const randomOffset = (Math.sin(Date.now() * 0.0003 + i * 1.5) * 1.5);
            const lineOffsetPercent = baseOffset + randomOffset;
            const lineLeftPercent = trainPositionPercent - trainWidthPercent + lineOffsetPercent;
            
            const randomVertical = Math.sin(Date.now() * 0.0002 + i * 2) * 3;
            const verticalPosition = (i * 2.5) + randomVertical;
            
            const randomWidth = 25 + (Math.sin(Date.now() * 0.0004 + i * 0.8) * 10);
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
