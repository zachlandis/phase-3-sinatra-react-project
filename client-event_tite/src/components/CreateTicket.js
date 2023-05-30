import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function CreateTicket({onAddTicket}) {
    const [ticketHolder, setTicketHolder] = useState("")
    const [ticketNumber, setTicketNumber] = useState("")
    const [ticketPrice, setTicketPrice] = useState("")

    const {id} = useParams()
    

    function handleFormSubmit(e) {
        e.preventDefault()

        const newTicket = {
            ticket_holder: ticketHolder,
            ticket_number: ticketNumber,
            ticket_price: ticketPrice
        }

        fetch(`http://localhost:9292/events/${id}/tickets`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(newTicket)
        })
        .then(r => r.json())
        .then(data => onAddTicket(data))
        setTicketHolder("")
        setTicketNumber("")
        setTicketPrice("")
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type='text'
                    placeholder='Ticket Holder'
                    value={ticketHolder}
                    onChange={(e) => {setTicketHolder(e.target.value)
                    }}
                >
                </input>
                <input 
                    type='text'
                    placeholder='Ticket Number'
                    value={ticketNumber}
                    onChange={(e) => {setTicketNumber(e.target.value)
                    }}
                >
                </input>
                <input 
                    type='number' 
                    min="0" 
                    step="any"
                    placeholder='Ticket Price'
                    value={ticketPrice}
                    onChange={(e) => {setTicketPrice(e.target.value)
                    }}
                >
                </input>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default CreateTicket