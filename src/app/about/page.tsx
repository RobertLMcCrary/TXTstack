"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';

//nextui
import {
    Card,
    CardBody,
    CardHeader,
    Image,
    Link,
    Button
} from '@nextui-org/react'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//team
type teamMember = {
    id: number,
    name: string,
    role: string,
}

const team: teamMember[] = [
    {
        id: 1,
        name: "Robert McCrary",
        role: "CEO, Founder"
    }
]

function About() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='items-center text-center'>

            <section className='mx-[10vw]'>
                <h1 className='text-[4vw] my-[20px] font-bold'>Our Team</h1>
                <div className='grid grid-cols-1 gap-[50px]'>
                    {team.map((member) => (
                        <Card data-aos="flip-up" key={member.id} className='bg-gray-200 p-[15px]'>
                            <CardHeader className='text-2xl font-bold'>{member.name}</CardHeader>
                            <CardBody className='text-xl'>
                                {member.role}
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>

            <section className='grid sm:grid-cols-2 grid-cols-1 text-left mt-[200px] mx-[7vw] gap-[7vw]'>
                <div>
                    <Image data-aos="fade-down" className='w-[20vw]' src='/error.png' alt='error icon' />
                    <h1 data-aos="fade-down-right" className='text-[4vw] my-[20px] font-bold'>The Problem</h1>
                    <p data-aos="fade-up-right" className='text-[3vw] sm:text-[1.2vw]'>
                        One of the biggest challenges for Computer Science students today is the lack of
                        engagement in projects beyond the classroom. This gap, often due to a curriculum
                        focused on theory over practice, prevents students from deepening their understanding
                        and developing essential problem-solving skills. Working on side projects makes
                        learning more enjoyable, fosters creativity, and better prepares students for real-world
                        challenges. By exploring personal projects, students can discover their passions, experiment
                        with new technologies, and gain confidence, making their studies both fun and rewarding.
                    </p>
                </div>

                <div>
                    <Image data-aos="fade-down" className='w-[20vw]' src='/light-bulb.png' alt='light buld icon' />
                    <h1 data-aos="fade-down-left" className='text-[4vw] my-[20px] font-bold'>The Idea</h1>
                    <p data-aos="fade-up-left" className='text-[3vw] sm:text-[1.2vw]'>
                        We envisioned a dynamic space where Computer Science students
                        and developers could come together to share and showcase their
                        side projects. Our platform is designed to foster a collaborative
                        environment where users can network, seek assistance, and gather
                        valuable feedback from their peers. By connecting like-minded
                        individuals, we aim to create a community that not only celebrates
                        innovation but also supports and enhances each member's journey in
                        the world of technology and development.
                    </p>
                </div>
            </section>

            <section className='my-[200px]'>
                <div className='mx-[15vw]'>
                    <h1 data-aos="fade-right" className='text-[4vw] my-[20px] font-bold'>Our Mission</h1>
                    <p data-aos="fade-left" className='text-[3vw] sm:text-[1.2vw]'>
                        Our mission is to create a vibrant community where Computer 
                        Science students and developers can connect, collaborate, and 
                        grow. We aim to foster innovation and learning by providing a 
                        platform for sharing projects, seeking feedback, and building 
                        meaningful professional networks. Together, we strive to make 
                        the journey of development exciting, supportive, and enriching.
                    </p>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default About