import React from 'react'
import { useSelector } from 'react-redux'

export default function Reviews() {
    const { product } = useSelector((state) => state.Nav)
    return (
        <div>
            <center>
                <h2>There is no Reviews at this movement</h2>
            </center>
        </div>
    )
}
