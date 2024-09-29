import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export const SearchBar = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full md:w-[65%]">
        <Input 
          type="text" 
          placeholder="UI/UX product design job" 
          className="w-full pl-10 pr-24 py-3 rounded-full text-gray-800 bg-white border-gray-300"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Button className="absolute right-0 top-0 bottom-0 px-6 rounded-r-full bg-[#5968F0] hover:bg-[#4A59E0] text-white">
          Search
        </Button>
      </div>
    </div>
  );
};