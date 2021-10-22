import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Dailyverse() {

    const getDailyVerse = () => {
        const url = 'https://beta.ourmanna.com/api/v1/get?format=json&order=daily';
        const options = {method: 'GET', headers: {Accept: 'application/json'}};

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                const {verse: { details: { reference, text } }} = json
                setVerse(text)
                setReference(reference)
            })
            .catch(err => console.error('error:' + err));
    }

    const [reference, setReference] = useState('')
    const [verse, setVerse] = useState('')

    useEffect(() => {
        getDailyVerse()
    }, [])

    return (
        <Card>
            <h2 className="text-darkred text-5xl">{reference}</h2>
            <p className="font-normal">{verse}</p>
        </Card>
    )
}
