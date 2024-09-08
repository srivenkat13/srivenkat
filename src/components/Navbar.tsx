"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 md:top-10 inset-x-0 max-w-2xl w-[80%]  mx-auto z-50  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        <Link href={"/#featured"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About me"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
export default Navbar;
