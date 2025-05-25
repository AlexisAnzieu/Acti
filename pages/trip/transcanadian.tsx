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
    let isScrolling = false;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Prevent multiple rapid scrolls
      if (isScrolling) return;
      
      // Use vertical scroll to advance to next/previous day
      if (e.deltaY > 0) {
        // Scrolling down - go to next day
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.floor(currentScrollLeft / window.innerWidth);
        const nextDay = Math.min(currentDay + 1, 3); // Max 4 days (0-3)
        
        if (nextDay !== currentDay) {
          isScrolling = true;
          container.scrollTo({
            left: nextDay * window.innerWidth,
            behavior: "smooth"
          });
          
          // Reset scroll lock after animation
          setTimeout(() => {
            isScrolling = false;
          }, 600);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up - go to previous day
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.ceil(currentScrollLeft / window.innerWidth);
        const prevDay = Math.max(currentDay - 1, 0); // Min day 0
        
        if (prevDay !== currentDay) {
          isScrolling = true;
          container.scrollTo({
            left: prevDay * window.innerWidth,
            behavior: "smooth"
          });
          
          // Reset scroll lock after animation
          setTimeout(() => {
            isScrolling = false;
          }, 600);
        }
      }
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
          transition="left 0.15s ease-out"
          fontSize="2.2rem"
          filter="drop-shadow(0 3px 6px rgba(0,0,0,0.3))"
          zIndex={2}
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
        {[0, 25, 50, 75, 100].map((position, index) => (
          <Box
            key={index}
            position="absolute"
            bottom="20px"
            left={`${position * 0.85}%`}
            fontSize="1.2rem"
            opacity={scrollProgress * 100 >= position ? "1" : "0.3"}
            transition="opacity 0.3s ease"
            transform="translateX(-50%)"
          >
            🚉
          </Box>
        ))}
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
          bottom="160px"
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
