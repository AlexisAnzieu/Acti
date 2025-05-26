import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface LazyTooltipImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
}

export const LazyTooltipImage: React.FC<LazyTooltipImageProps> = ({
  src,
  alt = "",
  width = 600,
  height = 400,
  quality = 30,
  sizes = "(max-width: 600px) 100vw, 600px",
  style,
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setShouldLoad(true);
        }
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Also trigger loading when the component becomes visible (for tooltips)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={imgRef} style={style}>
      {shouldLoad ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            borderRadius: "5%",
            maxWidth: "100%",
            height: "auto",
          }}
          quality={quality}
          sizes={sizes}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSrjjUDByQdNvNoDqBIhJOiBhZlXtHbNBKJJfIgR0dQ3NcnLOB4TgcvOAJtL2rPqNIOd1YfUNY0LJByb"
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
          Loading...
        </div>
      )}
    </div>
  );
};

export default LazyTooltipImage;
