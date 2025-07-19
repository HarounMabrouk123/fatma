// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white flex items-center justify-center h-20 shadow-sm">
      <div className="flex items-center space-x-4">
        <Image
          src="/logos/Logo_STB.png"
          alt="STB Bank Logo"
          width={300}
          height={300}
          className="object-contain"
        />
        
      </div>
    </header>
  );
}
