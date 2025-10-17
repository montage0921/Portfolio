import type { ReactNode } from "react";

type ContactComponentProps = {
  children: ReactNode;
  contactType: string;
  contactInfo: string;
};

export default function ContactComponent({
  children,
  contactType,
  contactInfo,
}: ContactComponentProps) {
  return (
    <div className=" flex gap-4">
      <div className="text-[hsl(var(--theme-color))] bg-[hsl(var(--theme-color)/0.2)] w-12 h-12 rounded-full flex items-center justify-center">
        {children}
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold">{contactType}</h2>
        <p className="text-sm opacity-80 break-words">{contactInfo}</p>
      </div>
    </div>
  );
}
