import { MenuIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@/components/partials/logo";
import { useAuthStore } from "@/lib/stores/useAuthStore";

const Navbar = () => {
  const navigationData = [
    {
      type: "link",
      title: "Dashboard",
      href: "/dashboard",
      className: "hover:text-primary max-md:hidden",
    },
    {
      type: "link",
      title: "Users",
      href: "/users",
      className: "hover:text-primary max-md:hidden",
    },
    {
      type: "logo",
    },
    {
      type: "link",
      title: "About",
      href: "/about",
      className: "hover:text-primary max-md:hidden",
    },
    {
      type: "button",
      title: "Logout",
      action: logoutAction,
      className: "w-fit py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600! hover:bg-blue-700! focus:outline-none cursor-pointer",
    },
  ];

  const mobileNavigation = navigationData.filter(
    (item) => item.type === "link"
  );
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  function logoutAction (){
    logout(navigate)
  }

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          {navigationData.map((item, index) => {
            if (item.type === "logo") {
              return <Logo key={`logo-${index}`} className="text-foreground gap-3 cursor-pointer" />;
            }

            if (item.type === "button") {
              return (
                <Button
                  key={item.title}
                  onClick={item.action}
                  className={item.className}
                >
                  {item.title}
                </Button>
              );
            }

            return (
              <Link
                key={item.title}
                to={item.href!}
                className={item.className}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "icon" })}>
              <MenuIcon />
              <span className="sr-only">Menu</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {mobileNavigation.map((item) => (
                  <DropdownMenuItem key={item.title}>
                    <Link to={item.href!} className="w-full">{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;