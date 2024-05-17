"use client";
import React, { useEffect, useState } from 'react'
import Nav from './components/Nav';
import Dashboard from './components/dashboard';
import Footer from './components/Footer';

//clerk
import { SignedIn, SignedOut } from '@clerk/nextjs';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//nextui
import {
	Link,
	Button,
	Image
} from "@nextui-org/react"

function page() {

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='text-center items-center flex flex-col'>
			<SignedIn>
				<Dashboard />
			</SignedIn>

			<SignedOut>
				<div className='flex justify-around items-center text-center w-[100vw] h-[600px] bg-gray-200'>
					<Image src='/Logo-Stack.png' alt='logo' />
					<div className='flex flex-col'>
						<h1 className='text-[5vw] font-bold'>Showcase Your Work.</h1>
						<h1 className='text-[5vw] font-bold'>Inspire Others.</h1>
					</div>
				</div>

				<section>
					<div className='grid gap-[100px] my-[100px] mx-[10vw] grid-cols-1 sm:grid-cols-2'>
						<Image data-aos="fade-right" src='#' className='w-[30vw] h-[30vw] border-solid border-1 border-blue-500' />
						<div className='text-left'>
							<h1 data-aos="fade-down-left" className='text-[4vw] font-bold mb-4'>Share a Project</h1>
							<p data-aos="fade-up-right" className='text-[3vw] sm:text-[1.5vw]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>

						<div className='text-left'>
							<h1 data-aos="fade-down-right" className='text-[4vw] font-bold mb-4'>Recieve Help/Feedback</h1>
							<p data-aos="fade-up-left" className='text-[3vw] sm:text-[1.5vw]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<Image data-aos="fade-left" src='#' className='w-[30vw] h-[30vw] border-solid border-1 border-blue-500' />

						<Image data-aos="fade-right" src='#' className='w-[30vw] h-[30vw] border-solid border-1 border-blue-500' />
						<div className='text-left'>
							<h1 data-aos="fade-down-left" className='text-[4vw] font-bold mb-4'>Follow Other Users</h1>
							<p data-aos="fade-up-right" className='text-[3vw] sm:text-[1.5vw]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>

					</div>
				</section>

				<div>
					<h1 data-aos="fade-right" className='text-3xl font-bold my-4'>Don't have an account?</h1>
					<Button data-aos="fade-left" color='primary' as={Link} href='/sign-up'>Signup</Button>
				</div>
				<Footer />
			</SignedOut>
		</div>
	)
}

export default page

