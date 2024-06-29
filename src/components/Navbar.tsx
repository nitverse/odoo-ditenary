import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
    // Add more placeholder links as needed
  ];

  return (
    <header className="text-gray-600 body-font bg-white shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SecureClerk</span>
          </a>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/profile">
            <div className="mr-5 cursor-pointer hover:text-gray-900">
              Profile
            </div>
          </Link>
          <Link href="/user">
            <div className="mr-5 cursor-pointer hover:text-gray-900">
              Dashboard
            </div>
          </Link>
          <Link href="/admin">
            <div className="mr-5 cursor-pointer hover:text-gray-900">
              Admin Dashboard
            </div>
          </Link>
          {/* Add more links directly here as needed */}
        </nav>
        <div className="md:flex items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
