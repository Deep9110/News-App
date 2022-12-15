"use client";

import React from 'react'
import { categories } from '../constants'
import {usePathname} from "next/navigation"
import NavLink from "./NavLink"

function NavLinks() {
    const pathname = usePathname();

    const isActive = (path:string) => {
        return pathname?.split("/").pop() === pathname;
    }
  return (
    <nav className='grid max-w-6xl grid-cols-4 gap-3 pb-10 mx-auto text-xs border-b md:grid-cols-7 md:text-sm'>
        {categories.map((category) =>(
            <NavLink key = {category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}

export default NavLinks