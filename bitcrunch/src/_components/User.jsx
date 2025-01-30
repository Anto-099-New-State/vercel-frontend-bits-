"use client"
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function User() {
    const router = useRouter();
    let userAddress = null;

    useEffect(() => {
      userAddress = localStorage.getItem('walletAddress')
      if (!userAddress) {
        router.push('/create-account');
      }
    }, [router]); 
  return (
        <div className="right-4 dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Profile</div>
  <ul tabIndex={0} className="dropdown-content menu bg-blackrounded-box z-[1] w-5 p-0 shadow">
        <li>{userAddress && <span>{userAddress.slice(0,6)}</span>}
        </li></ul>
</div>
       
  )
}

export default User