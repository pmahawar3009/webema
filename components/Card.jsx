'use client'
import Link from "next/link"

const Card = ({ title, desc, href }) => {
    return (
        <div className="card w-95 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end w-60">
                    <Link href={`/${href}`} className='btn btn-accent'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Card