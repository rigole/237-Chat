import React from 'react'

const UserCard = ({item:{firstName, lastName, id}}) => {

    return (
        <div>{firstName}</div>
    )
}

export default UserCard