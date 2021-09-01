import React, {useState} from 'react'

function Start() {

    const [input, setInput] = useState('')

    function handleInput(e){
        setInput(e.target.value)
    }

    function check_fetch(){

        let data = JSON.stringify({
            room_id: input,
            admin: false,
        })

        console.log(data)

        fetch('http://localhost:4000/api/wsauth', {
            method: 'POST',
            body: data,
            mode: 'no-cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })
        //.then(res => res.json())
        //.then(data => console.log(data))
    }

    return (
        <div>
            <input onChange={handleInput} type="text" />
            <button onClick={check_fetch}>Connect</button>
        </div>
    )
}

export default Start