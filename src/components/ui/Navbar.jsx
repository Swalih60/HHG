"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent className="w-80 p-4 bg-white shadow-lg rounded-lg">
                 <div className="flex flex-row space-y-4">
                  <div className="flex flex-row items-center space-x-4">
                    <p className="flex-1">
                      Explore various achievemnts and events happening around.
                    </p>
                    <Link href="/explore">
                      <span className="text-blue-500 underline cursor-pointer">Go to Resources</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuContent className="w-80 p-4 bg-white shadow-lg rounded-lg">
                 <div className="flex flex-row space-y-4">
                  <div className="flex flex-row items-center space-x-4">
                    <p className="flex-1">
                      Get to know about the events around.
                    </p>
                    <Link href="/Events">
                      <span className="text-blue-500 underline cursor-pointer">Go to Resources</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="w-80 p-4 bg-white shadow-lg rounded-lg">
                 <div className="flex flex-row space-y-4">
                  <div className="flex flex-row items-center space-x-4">
                    <p className="flex-1">
                      Post and find the resources you are in need over here.
                    </p>
                    <Link href="/resources">
                      <span className="text-blue-500 underline cursor-pointer">Go to Resources</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default Navbar
