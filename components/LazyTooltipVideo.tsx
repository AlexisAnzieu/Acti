import { useState, useEffect, useRef } from "react";

interface LazyTooltipVideoProps {
  src: string;
  style?: React.CSSProperties;
}

export const LazyTooltipVideo: React.FC<LazyTooltipVideoProps> = ({
  src,
  style,
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Trigger loading when the component becomes visible (for tooltips)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 50); // Load video quickly when tooltip appears

    return () => clearTimeout(timer);
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }
  };

  return (
    <div style={style}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          style={{
            borderRadius: "5%",
            maxWidth: "100%",
            width: "100%",
            display: isLoaded ? "block" : "none", // Hide until loaded
          }}
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="auto"
          onLoadedData={handleLoadedData}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
          }}
        >
          Loading video...
        </div>
      )}
      {shouldLoad && !isLoaded && (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          Loading video...
        </div>
      )}
    </div>
  );
};

export default LazyTooltipVideo;
