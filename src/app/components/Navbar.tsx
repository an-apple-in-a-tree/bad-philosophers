"use client";
import { Cinzel_Decorative, PT_Serif } from "next/font/google";
const cinzel = Cinzel_Decorative({ weight: "400", subsets: ["latin"] });
const pt_serif = PT_Serif({ weight: "400", subsets: ["latin"] });
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu.Root className={`flex justify-center bg-beige`}>
      <NavigationMenu.List
        className={`${cinzel.className} flex text-dim text-2xl`}
      >
        <NavigationMenu.Item className="py-8">
          <NavigationMenu.Link
            href="/"
            className="hover:bg-gold py-8 px-36"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="py-8">
          <NavigationMenu.Link
            href="../pages/linguistic-determinism"
            className="hover:bg-gold py-8 px-36"
          >
            Linguistic Determinism
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="py-8">
          <NavigationMenu.Link
            href="../pages/linguistic-determinism"
            className="hover:bg-gold py-8 px-36"
          >
            Wiki
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

