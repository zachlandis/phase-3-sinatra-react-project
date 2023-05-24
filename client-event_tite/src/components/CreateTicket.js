import React, { useState } from 'react'

function CreateTicket() {
    const [ticketHolder, setTicketHolder] = useState("")
    const [ticketNumber, setTicketNumber] = useState("")
    const [ticketPrice, setTicketPrice] = useState("")


    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='Ticket Holder'
                    value={ticketHolder}
                    onChange={(e) => {setTicketHolder(e.target.value)
                        console.log(ticketHolder)
                    }}
                >
                </input>
                <input 
                    type='text'
                    placeholder='Ticket Number'
                    value={ticketNumber}
                    onChange={(e) => {setTicketNumber(e.target.value)
                        console.log(ticketNumber)
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
                        console.log(ticketPrice)
                    }}
                >
                </input>
            </form>
        </div>
    )
}

export default CreateTicket