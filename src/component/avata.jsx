// ~/src/components/Avatar.jsx
import React, { useState } from 'react';

export default function Avatar() {
    const user = {
        avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png',
        name: 'John Doe'
    }

    const [email, setEmail] = useState('');


    const handleClick = (message) => {
        alert(`Lời nhắn: ${message}`);
    }

    const b = (e)=>{
        
    }

    const a = (e) => {
        console.log(e.target.value);
    }

    const handEmailInput = (event) => {
        const value = event.target.value;
        setEmail(value)
    }

    return (
        <div>
            <img
                className='avatar'
                src={user.avatar}
                alt='User Avatar'
                width='64px'
                onClick={handleClick}
            />
            <p onClick={
                () => {
                    alert(user.name)
                }
            }>

            </p>
            <form action="" onSubmit={b}>
                <input placeholder='Some text ...' onChange={a} />
            </form>
        </div>

    )
};
