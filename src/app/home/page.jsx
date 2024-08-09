"use client"

import * as React from "react"
import Navbar from "@/components/ui/navbar"

  
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/lap.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col items-center justify-center z-10 py-4 text-center ">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className="text-5xl font-bold mb-4 text-white ">EduSphere</h1>
          <p className="text-xl max-w-lg mx-auto text-white">
            Welcome to EduSphere, a Web3 social platform for students. Connect with peers, find and join events, share valuable resources, and showcase your skills and achievements to the community.
          </p>
        </div>
      </div>
    </div>
  )
}
