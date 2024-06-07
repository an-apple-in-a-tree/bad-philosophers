"use client";
import { Cinzel_Decorative, PT_Serif } from "next/font/google";
const cinzel = Cinzel_Decorative({ weight: "400", subsets: ["latin"] });
const pt_serif = PT_Serif({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="bg-gold">
      <p className={`${cinzel.className} py-8 text-beige text-3xl font-bold text-center`}>@2024 Created by gloria li</p>
    </div>
  );
}

