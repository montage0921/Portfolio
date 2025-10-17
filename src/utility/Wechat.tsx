import { useState } from "react";
import { siWechat } from "simple-icons";

type WechatProps = {
  size?: number;
  href?: string;
  hoveredColor?: string;
};

export default function Wechat({
  size = 24,
  hoveredColor = "var(--theme-color)",
}: WechatProps) {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative hover:cursor-pointer"
      onClick={() => setIsClick(!isClick)}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={isHover ? `hsl(${hoveredColor})` : "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={siWechat.path} />
      </svg>
      {isClick && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2  w-[200px] text-center rounded shadow-lg opacity-80">
          Wechat ID: akaGRgary
        </div>
      )}
    </div>
  );
}
