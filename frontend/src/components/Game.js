import React, {useEffect, useState } from 'react'

function Game(props) {

    const [ws_connection, setWs_connection] = useState()

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4050');

        setWs_connection('connecting')

        let msg = {
            room_id: window.location.search.substring(1)
        }
        console.log(msg)

        ws.addEventListener('open', () => {
            ws.send(JSON.stringify(msg))
            setWs_connection('connected')
        })

        ws.addEventListener('close', () => {
            setWs_connection('disconnected')
        })

    }, [])

    function connect_err(){
        if (ws_connection === 'connecting'){
            return 'connecting'
        } else {
            return 'disconnected'
        }
    }

    return ws_connection === 'connected' ? (
        <div>
            connected
        </div>
    ) : connect_err()
}

export default Game