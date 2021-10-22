import React from 'react'

export default function Card({ children }) {
    return (
        <div className="min-h-200 min-w-200 text-black bg-white p-10 text-dark font-dark font-bold rounded" style={{ margin: '1em' }}>
            { children }
        </div>
    )
}
