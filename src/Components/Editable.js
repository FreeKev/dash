import React from 'react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import useLocalStorage from 'react-use-localstorage'
import Card from './Card'

export default function Editable({ name }) {

    const [isediting, setIsediting] = useState(false)
    const [item, setItem] = useLocalStorage(name, '# Yada');

    const switchtoediting = () => {
        if(!isediting) { setIsediting(true) }
    }

    const switchtodisplay = () => {
        setIsediting(false)
    }

    return (
        <Card>
            <div onDoubleClick={switchtoediting}>
                {isediting ?
                    <>
                        <label>
                            Name:{' '}
                            <textarea
                            type="text"
                            placeholder="Enter your name"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            />
                        </label>
                        <button onClick={switchtodisplay}>Done</button>
                    </>
                :
                <div className="prose text-darkblue">
                    <ReactMarkdown children={item} />
                </div>
                }
            </div>
        </Card>
    )
}
