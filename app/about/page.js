'use client'

import Link from "next/link"

const About = () => {
    return (
        <div>
            <h1 className="text-7xl">About page</h1>
            <p>some data about the team members will sit here if team decides to</p>
            <p>low priority at the moment</p>
            <Link href='/' className='text-2xl'>back to home page</Link>
        </div>
    )
}

export default About