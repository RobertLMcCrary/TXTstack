import React from 'react'

//nextui
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Image,
    Link,
    Card,
    CardHeader,
    CardBody,
} from "@nextui-org/react"

function Footer() {
    return (
        <div className='w-[100vw] flex justify-around items-center text-black border-solid border-gray-200 border-t-[1px] py-[20px] mt-[30px] bg-gray-100'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>My Clothing Brand:</h1>
                <Link href='https://codeswagcentral.etsy.com' className='cursor-pointer text-black hover:underline'>CodeSwagCentral (Etsy)</Link>
                <Link href='https://codeswagcentral.com' className='cursor-pointer text-black hover:underline'>codeswagcentral.com</Link>
            </div>

            <div className='flex flex-col'>
                <h1 className="text-xl font-bold">My Socials:</h1>
                <Link href='https://www.youtube.com/channel/UC5YXlEImyvxjQnEcpSVd3GA' className='hover:underline text-black'>YouTube</Link>
                <Link href='https://www.linkedin.com/in/robert-mccrary-388b73287/' className='hover:underline text-black'>LinkedIn</Link>
                <Link href='https://github.com/RobertLMcCrary' className='hover:underline text-black'>GitHub</Link>
            </div>
        </div>
    )
}

export default Footer
