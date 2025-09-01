import Link from "next/link";
import Button from "../Button";
import { navigation } from "@/constant/home";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { User } from "@/models/entities/user";
import { localStorageService } from "@/services/factories/local-storage.service";
import { useRouter } from "next/navigation";

interface NavBarProps {
  user?: User;
}

const NavBar: React.FC<NavBarProps> = ({ user }) => {
  const router = useRouter();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(userMenuRef, () => {
    setIsUserMenuOpen(false);
  });
  return (
    <>
      <div className="flex items-center">
        <Link href="/home" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-black">BikeRent</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              item.current ? "bg-black text-white" : "text-black hover:text-white hover:bg-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Desktop User Menu */}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user.firstName?.charAt(0) || user.email?.charAt(0) || "U"}
                </span>
              </div>
              <span className="text-sm text-black">{user.firstName || "User"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button
                  onClick={() => {
                    // Handle profile
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-200  transition-colors"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    // Handle bookings
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                >
                  My Bookings
                </button>
                <button
                  onClick={() => {
                    // Handle settings
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                >
                  Settings
                </button>
                <hr className="my-1 border-gray-200" />
                <button
                  onClick={() => {
                    localStorageService.removeAuthToken();
                    router.push("/login");
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-black hover:text-gray-600">
              Sign In
            </Link>
            <Button variant="primary">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
