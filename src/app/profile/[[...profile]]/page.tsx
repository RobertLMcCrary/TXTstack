"use client"
import React, { useEffect, useState } from 'react'

//nextui
import {
    Card,
    CardBody,
    CardHeader,
    Image,
    Link,
    Button
} from '@nextui-org/react'

//clerk
import { UserProfile } from '@clerk/nextjs'

function page() {
    

    return (
        <div className='flex flex-col justify-center items-center gap-[100px] my-[100px]'>
            <UserProfile />
        </div>
    )
}

export default page
