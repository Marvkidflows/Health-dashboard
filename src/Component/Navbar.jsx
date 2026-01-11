import { Bell, Settings } from "lucide-react";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiMessageSquare,
  FiCreditCard,
} from "react-icons/fi";
import Logo from "../assets/TestLogo.png";
import NavbarDoc from "../assets/NavbarDoc.png";

export default function Navbar() {
  return (
    <header className="w-full mt-4">
      <div className="max-w-[1350px] mx-auto ">
        {/* Floating Navbar Container */}
        <div className="bg-white border rounded-full px-5">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <img src={Logo} alt="Tech.Care" className="h-7" />

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <NavItem icon={<FiHome />} label="Overview" />
              <NavItem icon={<FiUsers />} label="Patients" active />
              <NavItem icon={<FiCalendar />} label="Schedule" />
              <NavItem icon={<FiMessageSquare />} label="Message" />
              <NavItem icon={<FiCreditCard />} label="Transactions" />
            </nav>

            {/* Right Profile + Icons */}
            <div className="flex items-center gap-4">

              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={NavbarDoc}
                  alt="Doctor"
                  className="w-9 h-9 rounded-full"
                />
                <div className="leading-tight hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800">
                    Dr. Jose Simmons
                  </p>
                  <p className="text-xs text-gray-500">
                    General Practitioner
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-200" />

              {/* Icons */}
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2 text-sm font-medium
        rounded-full transition
        ${
          active
            ? "bg-teal-100 text-teal-700"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        }
      `}
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
