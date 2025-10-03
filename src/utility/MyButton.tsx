import React from "react";

type MyButtonProps = {
  color: string;
  text: string;
  btFn: () => void;
};

export default function MyButton({ color, text, btFn }: MyButtonProps) {
  return (
    <div
      style={{
        backgroundColor: `hsl(${color})`,
      }}
      className="px-6 py-2 flex justify-center items-center rounded-full font-semibold text-sm md:text-base hover:cursor-pointer"
      onClick={btFn}
    >
      {text}
    </div>
  );
}
