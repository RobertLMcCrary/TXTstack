import React from 'react'

//clerk
import { SignUp } from '@clerk/nextjs'

function page() {
    return (
        <div className='flex items-center justify-center py-[20px]'>
            <SignUp />
        </div>
    )
}

export default page
