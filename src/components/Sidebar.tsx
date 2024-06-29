import { FC } from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { SignedIn, UserButton } from "@clerk/nextjs";
import {LayoutDashboard, UserCog, Vegan} from 'lucide-react'
import Link from "next/link";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="flex flex-col">
  
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2 pb-5 border-b"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Dietnary
            </span>
          </a>
          <ul className="space-y-2 pt-5 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user-details"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserCog />
                <span className="flex-1 ms-3 whitespace-nowrap">User details</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/diet-plans"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Vegan />
                <span className="flex-1 ms-3 whitespace-nowrap">Diet Plans</span>
              </Link>
            </li>
          </ul>
          <div
            id="dropdown-cta"
            className="p-4 mt-[280px] flex gap-x-4 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            <UserButton />
            User Settings
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
