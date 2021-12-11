import React from "react";

const User=(props)=> {
// console.warn(props)
const {data} = props
    return (
        <div>
            <h1>User Component</h1>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
        </div>
    )
}

export default User
