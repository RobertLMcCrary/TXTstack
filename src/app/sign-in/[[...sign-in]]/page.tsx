import React from 'react'

//clerk
import { SignIn } from '@clerk/nextjs'

function page() {
    return (
        <div className='flex items-center justify-center py-[20px]'>
            <SignIn />
        </div>
    )
}

export default page
