"use client";

import { useState, useEffect, useRef } from "react";

export default function TextAnimation({
  texts = [], // 표시할 텍스트 배열
  interval = 3000, // 텍스트 변경 간격 (ms)
  className = "", // 추가 스타일링을 위한 className
  textClassName = "", // 개별 텍스트 스타일링
  fadeClassName = "opacity-0", // 페이드 아웃 시 스타일
  transitionClassName = "transition-opacity duration-500", // 트랜지션 효과
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (texts.length <= 1) return;

    const animateText = () => {
      setIsVisible(false); // 페이드 아웃

      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true); // 페이드 인
      }, 500); // 페이드 아웃 후 텍스트 변경
    };

    const intervalId = setInterval(animateText, interval);

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, interval]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`
          ${textClassName}
          ${!isVisible ? fadeClassName : ""}
          ${transitionClassName}
        `}
      >
        {texts[currentIndex]}
      </div>
    </div>
  );
}
