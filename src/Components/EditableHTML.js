import React from 'react'
import { useState } from 'react'
import useLocalStorage from 'react-use-localstorage'
import Card from './Card'

export default function EditableHTML({ name }) {

    const [isediting, setIsediting] = useState(false)
    const [item, setItem] = useLocalStorage(name, '# Yada');

    const switchtoediting = () => {
        if(!isediting) { setIsediting(true) }
    }

    const switchtodisplay = () => {
        setIsediting(false)
    }

    function createMarkup(item) { return {__html: item }; };

    return (
        <Card>
            <div onDoubleClick={switchtoediting}>
                {isediting ?
                    <>
                        <label>
                            HTML:{' '}
                            <textarea
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            />
                        </label>
                        <button onClick={switchtodisplay}>Done</button>
                    </>
                :
                <div className="prose text-darkblue" dangerouslySetInnerHTML={createMarkup(item)} />
                }
            </div>
        </Card>
    )
}
