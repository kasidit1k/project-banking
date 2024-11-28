"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../constants";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar w-[250px] h-screen bg-gray-100 p-4">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="mb-8 cursor-pointer flex items-center gap-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-lg font-bold text-gray-800">Finovate</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        
      </nav>
    </section>
  );
};

export default Sidebar;
