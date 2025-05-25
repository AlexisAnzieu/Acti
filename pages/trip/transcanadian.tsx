/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, keyframes, Text } from "@chakra-ui/react";
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
        <Text mb={6} fontSize="lg" lineHeight="1.8" whiteSpace="pre-line">
          {content}
        </Text>
        {imageUrl && (
          <Box
            maxWidth="600px"
            margin="0 auto"
            boxShadow="xl"
            borderRadius="lg"
            overflow="hidden"
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

    let isMouseDown = false;
    let startX: number;
    let startY: number;
    let scrollLeft: number;
    let lastTouchX: number;
    let lastTouchY: number;
    let touchStartTime: number;
    let isHorizontalSwipe = false;

    // Optimized scroll progress calculation using requestAnimationFrame
    const updateScrollProgress = () => {
      if (!container) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;
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
        
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.floor(currentScrollLeft / window.innerWidth);
        
        if (e.deltaY > 0) {
          const nextDay = Math.min(currentDay + 1, 3);
          if (nextDay !== currentDay) {
            isScrollingRef.current = true;
            container.scrollTo({
              left: nextDay * window.innerWidth,
              behavior: "smooth"
            });
            setTimeout(() => { isScrollingRef.current = false; }, 600);
          }
        } else if (e.deltaY < 0) {
          const prevDay = Math.max(currentDay - 1, 0);
          if (prevDay !== currentDay) {
            isScrollingRef.current = true;
            container.scrollTo({
              left: prevDay * window.innerWidth,
              behavior: "smooth"
            });
            setTimeout(() => { isScrollingRef.current = false; }, 600);
          }
        }
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = dayContentElement;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && isAtBottom) {
        e.preventDefault();
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.floor(currentScrollLeft / window.innerWidth);
        const nextDay = Math.min(currentDay + 1, 3);
        
        if (nextDay !== currentDay) {
          isScrollingRef.current = true;
          container.scrollTo({
            left: nextDay * window.innerWidth,
            behavior: "smooth"
          });
          setTimeout(() => { isScrollingRef.current = false; }, 600);
        }
      } else if (e.deltaY < 0 && isAtTop) {
        e.preventDefault();
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.ceil(currentScrollLeft / window.innerWidth);
        const prevDay = Math.max(currentDay - 1, 0);
        
        if (prevDay !== currentDay) {
          isScrollingRef.current = true;
          container.scrollTo({
            left: prevDay * window.innerWidth,
            behavior: "smooth"
          });
          setTimeout(() => { isScrollingRef.current = false; }, 600);
        }
      }
    };

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
        const { scrollTop, scrollHeight, clientHeight } = dayContentElement;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        // Check if trying to scroll beyond boundaries
        if ((totalDeltaY > 30 && isAtTop) || (totalDeltaY < -30 && isAtBottom)) {
          e.preventDefault();
          
          if (isScrollingRef.current) return;
          
          const currentScrollLeft = container.scrollLeft;
          const currentDay = Math.floor(currentScrollLeft / window.innerWidth);
          
          if (totalDeltaY < -30 && isAtBottom) {
            // Scrolling down at bottom - go to next day
            const nextDay = Math.min(currentDay + 1, 3);
            if (nextDay !== currentDay) {
              isScrollingRef.current = true;
              isMouseDown = false; // Stop touch tracking
              container.scrollTo({
                left: nextDay * window.innerWidth,
                behavior: "smooth"
              });
              setTimeout(() => { isScrollingRef.current = false; }, 600);
              handleScroll();
              return;
            }
          } else if (totalDeltaY > 30 && isAtTop) {
            // Scrolling up at top - go to previous day
            const prevDay = Math.max(currentDay - 1, 0);
            if (prevDay !== currentDay) {
              isScrollingRef.current = true;
              isMouseDown = false; // Stop touch tracking
              container.scrollTo({
                left: prevDay * window.innerWidth,
                behavior: "smooth"
              });
              setTimeout(() => { isScrollingRef.current = false; }, 600);
              handleScroll();
              return;
            }
          }
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
      const deltaY = touch.pageY - startY;
      
      isMouseDown = false;
      
      // Handle quick swipe gestures for day navigation
      if (isHorizontalSwipe && touchDuration < 300 && Math.abs(deltaX) > 50) {
        e.preventDefault();
        const currentScrollLeft = container.scrollLeft;
        const currentDay = Math.round(currentScrollLeft / window.innerWidth);
        
        if (deltaX < -50) { // Swipe left - next day
          const nextDay = Math.min(currentDay + 1, 3);
          container.scrollTo({
            left: nextDay * window.innerWidth,
            behavior: "smooth"
          });
        } else if (deltaX > 50) { // Swipe right - previous day
          const prevDay = Math.max(currentDay - 1, 0);
          container.scrollTo({
            left: prevDay * window.innerWidth,
            behavior: "smooth"
          });
        }
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
            "Remontons le fil du récit jusqu'au J-0, lorsque le mardi 29 mai en fin d'après-midi nous entamons notre aventure ferroviaire. Il faut en effet se rendre à Toronto afin d'embarquer sur le Transcanadien. Qu'à cela ne tienne, nous avons déjà fait le trajet de cinq heures reliant Montréal à Toronto plusieurs fois. Les confortables wagons récemment mis en service nous permettent de nous délecter d'un beau coucher de soleil. Seul bémol, les coups de klaxon intempestifs qui surviennent à la moindre petite intersection dénuée de barrières de signalisation. Casque antibruit sur les oreilles et livre de poche en main, un avant-goût de notre aventure se dessine.\n\nNotre arrivée à Toronto débute par une petite marche nocturne de 15 minutes jusqu'à l'auberge de jeunesse la plus proche. S'ensuit d'une nuit passablement bruyante due à une isolation douteuse. Le transcanadien part à 10h, le réveil est mis à 8h, ce serait dommage de louper le départ hebdomadaire.\n\nNous voilà enfin au Jour 1 ! De retour à la gare avec une bonne heure d'avance à la recherche du train numéro 001. L'enregistrement se déroule dans le salon business, qui ne doit son nom qu'à ses fauteuils émaillés par le temps. Le distributeur de café-filtre à disposition ne nous émerveille pas vraiment. Nous décidons de partir à la recherche d'un Starbucks, afin d'allier un soupçon de présent à ces vestiges du passé. Café en main, nous nous rendons sur le quai et nous apercevons enfin se prolongeant devant nous, ce monstre de fer et d'acier brillant sous les miroirs ensoleillés des gratte-ciels. Je remonte la rame à la recherche de la locomotive, mais me fait stopper net dans mon élan par un garde de la sécurité qui ne souhaitait apparemment pas me voir m'aventurer jusque-là. Défi relevé, je réussirai à capturer une photo de cette locomotive d'ici la fin du séjour.\n\n\"10 minutes avant le départ !\" scande une voix grave dans la gare, Nous profitons d'un dernier bol d'air frais comme si nous embarquions dans une navette spatiale pour un an, puis escaladons la marche d'accès menant au wagon. Ce n'est pas une simple porte que nous franchissons mais une véritable machine à remonter dans le temps. Un seul pas à l'intérieur suffit à nous projeter 70 ans en arrière, à l'ère où la moquette sur les murs était de mise. Notre intendante de wagon nous présente la chambre dans laquelle nous allons dormir ces quatre prochains jours. Deux sièges sont disposés ici, repliés en soirée afin de laisser place à un lit superposé. L'odeur du vieux cuir monte aux narines, accompagnée de cette nostalgie du passé que nous n'avions vue que dans des vieux films.\n\nLe conducteur du train nous accueille à bord par les haut-parleurs, deux minutes avant d'enclencher le levier de vitesse. L'accélération est immédiate. Le paysage fuse à toute allure. Ou presque. C'est par une pointe de 20 km/h que va débuter cette sortie de périphérie de Toronto.\n\nNous sommes tellement enthousiastes à l'idée d'explorer le convoi que nous sortons de notre cocon dans les 5 minutes qui suivent le départ. J'avais l'impression d'être dans un livre d'Agatha Christie, en espérant que le meurtre ne concerne aucun d'entre nous. Au besoin, nous avions acheté un escape game en chemin afin de sustenter notre soif de mystère (et aussi pour nous occuper). La première voiture que nous abordons, et de loin la plus importante, est la voiture-restaurant. Les assiettes tintent au rythme des soubresauts des rails qui nous offrent une douce mélodie. Nous remontons une voiture de plus et tombons sur celle des activités. Quelques jeux de société à la boîte en carton délabré, victimes de leur succès, s'empilent dans un coin de table. Une dame m'interpelle tout au bout et me demande si je souhaite goûter au cocktail mimosa de bienvenue. Il est 10 heures mais après tout pourquoi pas. Cette première matinée consista à s'approprier ce véhicule d'un kilomètre et nous dépensâmes les heures suivantes à vagabonder de l'avant économique jusqu'à l'arrière prestige. Pour les plus cinéphiles d'entre vous, certains peuvent s'imaginer ce train comme celui du film Snowpiercer, symbolisant une lutte des classes. Ici définit ici par le droit d'accès aux wagons panoramiques, le clou du spectacle sur lequel nous reviendrons plus tard.\n\nEt maintenant, comment occuper tout ce temps disponible auquel nous ne sommes plus habitués ? Par chance, nous avons embarqué avec nous des romans mais ces derniers ne vont sûrement pas suffire. À 14h, c'est l'appel pour le troisième service de déjeuner. Voici venu le temps du double date entre inconnus. L'idée à bord est de mélanger les passagers de tout horizon lors des repas. Deux retraités nous racontent leur ancien métier d'architecte: paysagiste dans les parcs pour l'un et dans les cimetières pour l'autre. Cette discussion d'abord confuse et maladroite s'éclaircit peu à peu malgré la différence de langues et de générations. Bien que formelle, elle nous projette dans un univers différent. Mais l'exercice de traduction vers l'anglais est fatigant, notamment avec le bruit du train et des accents.\n\nÀ 17h, premier arrêt au milieu de l'inconnu, il fait à peine 10 degrés mais tout le monde se précipite dehors afin d'apprécier la caresse du vent frais et l'espace non exigu. Tous étudient avec curiosité ce sous-marin roulant, voguant en équipage vers l'inconnu à travers un environnement désertique.\n\nNous n'en sommes qu'à notre première journée et un fil conducteur commence déjà à émerger: le mouvement perpétuel sous nos pieds et le paysage qui défile en continu. Les hauts pins vert et les arbres dénués de feuilles, sortent tout juste de l'hiver. Les lacs, à peine dégelés, sur lesquels sont parsemées des traces de motoneige. Les quelques maisons alignées le long de la voie ferrée. Et enfin le bouquet final, le coucher de soleil en dégustant notre crème de champignons au dîner. La serveuse nous prévient du changement de fuseau horaire car cela fait plusieurs heures que nous n'avons plus de réseau et donc plus de synchronisation automatique. Ça serait bête de louper le petit déjeuner !",
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
