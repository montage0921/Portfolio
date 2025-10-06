import React from "react";

type MyButtonProps = {
  color?: string;
  borderColor?: string;
  text: string;
  btFn?: () => void;
  children?: React.ReactNode;
  download?: boolean;
  href?: string;
};

export default function MyButton({
  color,
  borderColor,
  text,
  btFn,
  download = false,
  href,
}: MyButtonProps) {
  if (download) {
    return (
      <a
        style={{
          backgroundColor: `hsl(${color})`,
          borderColor: borderColor ? `hsl(${borderColor})` : "transparent",
        }}
        className="px-6 py-2 border-2 flex justify-center items-center rounded-full font-semibold text-sm md:text-base hover:cursor-pointer transition-transform duration-300 hover:scale-[1.1]"
        href={href}
        download
      >
        {text}
      </a>
    );
  }
  return (
    <div
      style={{
        backgroundColor: `hsl(${color})`,
        borderColor: borderColor ? `hsl(${borderColor})` : "transparent",
      }}
      className="px-6 py-2 border-2 flex justify-center items-center rounded-full font-semibold text-sm md:text-base hover:cursor-pointer transition-transform duration-300 hover:scale-[1.1]"
      onClick={btFn}
    >
      {text}
    </div>
  );
}
