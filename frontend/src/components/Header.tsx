'use client';

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { User } from 'lucide-react'
import LoginModal from '@/components/LoginModal'

const SuperSapiensLogo = () => (
  <div className="flex items-center">
    <Image
      src="/images/logo.svg" 
      alt="SuperSapiens Logo" 
      width={48}
      height={48}
      className="h-12 w-auto"
    />
  </div>
)

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  return (
    <header className="flex justify-between items-center p-4 text-white">
      <SuperSapiensLogo />
      <Button 
        variant="ghost" 
        className="text-white hover:text-white hover:bg-white/20"
        onClick={openLoginModal}
      >
        Login / Sign Up
        <User className="ml-2 h-4 w-4" />
      </Button>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  )
}