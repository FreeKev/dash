import React from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import useLocalStorage from 'react-use-localstorage'
import Card from './Card'
import rehypeRaw from 'rehype-raw'

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
                    <div className="flex flex-col">
                        <label className="flex flex-col">
                            Content:{' '}
                            <textarea
                            type="text"
                            placeholder="Enter your content"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            />
                        </label>
                        <button onClick={switchtodisplay}>Done</button>
                    </div>
                :
                <div className="prose text-darkblue">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item} />
                </div>
                }
            </div>
        </Card>
    )
}
