import React from 'react'

export const Card = (props) => {
    const {pic, title, content} = props
    return (
        <div style={{ width: "300px", backgroundColor: "gray" }}>
            <div><img src={pic} style={{ height: "150px" }} /></div>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div>footer</div>
        </div>
    )
}