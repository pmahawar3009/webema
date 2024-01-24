'use client'

import Link from "next/link"

const Report = () => {
    return (
        <div>
            <h1 className="text-7xl">Scoreboard page</h1>
            <p>Hexagon chart will come here</p>
            <Link href='/' className='text-2xl'>back to home page</Link>
        </div>
    )
}

export default Report