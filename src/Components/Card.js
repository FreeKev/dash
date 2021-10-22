import React from 'react'

export default function Card({ children }) {
    return (
        <div className="shadow-lg min-h-200 min-w-200 text-black">
            { children }
        </div>
    )
}
