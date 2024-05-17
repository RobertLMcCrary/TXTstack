"use client"
import React from 'react'

//clerk
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

//nextui
import {
    Navbar,
    NavbarItem,
    NavbarContent,
    NavbarBrand,
    Button,
    Link,
    Image
} from "@nextui-org/react"

function Nav() {

    return (
        <Navbar maxWidth='full' className='h-[100px] border-solid border-gray-200 border-b-[1px]'>
            <NavbarContent className='w-[100vw] items-center'>
                <NavbarContent justify='start'>
                    <NavbarBrand>
                        <Image width={70} src='/Logo-Stack.png' alt='logo' />
                        <h1 className='text-3xl font-bold text-black'>TXTstack</h1>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify='end' className='flex gap-[2vw]'>
                    <NavbarItem>
                        <Link href='/' className='text-black text-xl transition duration-500 hover:text-gray-500'>Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href='/about' className='text-black text-xl transition duration-500 hover:text-gray-500'>About</Link>
                    </NavbarItem>
                    <SignedIn>
                        <NavbarItem>
                            <Link href='/profile' className='text-black text-xl transition duration-500 hover:text-gray-500'>Profile</Link>
                        </NavbarItem>
                    </SignedIn>
                    <SignedOut>
                        <NavbarItem>
                            <Button color='primary' as={Link} href='/sign-in'>Login</Button>
                        </NavbarItem>
                    </SignedOut>
                    <SignedIn>
                        <NavbarItem>
                            <Button color='success' as={Link} href='/create-post'>Create</Button>
                        </NavbarItem>
                        <NavbarItem>
                            <UserButton afterSignOutUrl='/' />
                        </NavbarItem>
                    </SignedIn>
                </NavbarContent>
            </NavbarContent>
        </Navbar>
    )
}

export default Nav
