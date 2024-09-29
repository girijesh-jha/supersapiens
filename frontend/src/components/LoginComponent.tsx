'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LoginComponent: React.FC = () => {
  return (
    <div className="w-full max-w-xl">
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/images/logo.svg"
          alt="SuperSapiens Logo"
          width={300}
          height={300}
          className="mb-2"
        />
      </div>

      <div className="bg-white rounded-lg p-12 shadow-lg">
        <p className="text-lg mb-7 text-center text-gray-500">Over 12,000 successful job placement</p>
        
        <h2 className="text-xl mb-4 text-center text-gray-400">Sign in</h2>
      
        <button className="w-full border border-gray-400 rounded-lg py-4 px-6 flex items-center justify-center mb-4 text-gray-500 hover:bg-gray-50 transition-colors">
          <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={30} height={30} className="mr-5" />
          Continue with LinkedIn
        </button>
        
        <button className="w-full border border-gray-400 rounded-lg py-4 px-6 flex items-center justify-center mb-12 text-gray-500 hover:bg-gray-50 transition-colors">
          <Image src="/images/google-logo.png" alt="Google" width={30} height={30} className="mr-5" />
          Continue with Google
        </button>
        
        
        <p className="text-center text-gray-500 text-sm mb-1">
          Having trouble logging in, check our{' '}
          <Link href="/help" className="text-blue-600 hover:underline">
            Help page
          </Link>
        </p>
        
        <p className="text-center text-gray-500 text-xs">
          All rights reserved | SuperSapiens | 2024
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;