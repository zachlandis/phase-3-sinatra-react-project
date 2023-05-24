// import React, { useState } from 'react';

// function Tickets({tickets, onDeleteTicket, onUpdateTicket}) {
//     const [updatedTicketId, setUpdatedTicketId] = useState(null);
//     const [isFormVisible, setIsFormVisible] = useState(false)
//     const [updatedTicket, setUpdatedTicket] = useState({
//         ticket_number: '',
//         ticket_holder: '',
//         ticket_price: ''
//     })


//     function handleUpdate(id) {
//         setUpdatedTicketId(id);
//         setIsFormVisible(true);
//     }

//     function handleInputChange(e) {
//         const { name, value } = e.target;
//         setUpdatedTicket((prevTicket) => ({
//             ...prevTicket,
//             [name]: value,
//         }))
//     }

//     function handleUpdateFormSubmit(e) {
//         e.preventDefault();

//         const updatedEvent = {
//             ticket_number: updatedTicket.ticket_number,
//             ticket_holder: updatedTicket.ticket_holder,
//             ticket_price: updatedTicket.ticket_price
//         }

//         fetch(`http://localhost:9292/tickets/${updatedTicketId}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedEvent)
//         })
//             .then(r => r.json())
//             .then(data => onUpdateTicket(data));

//             setIsFormVisible(false);
//             setUpdatedTicket({
//                 ticket_number: '',
//                 ticket_holder: '',
//                 ticket_price: ''
//             })
//     }
    
//     return (
//         <div>
//             <div>
//                 {isFormVisible && (
//                 <form onSubmit={handleUpdateFormSubmit}>
//                 <label>
//                 Ticket Number:
//                     <input
//                         type="text"
//                         name="ticket_number"
//                         value={updatedTicket.ticket_number}
//                         onChange={handleInputChange}
//                 />
//                 </label>
//                 <br/>
//                 <label>
//                 Ticket Holder:
//                     <input
//                         type="text"
//                         name="ticket_holder"
//                         value={updatedTicket.ticket_holder}
//                         onChange={handleInputChange}
//                 />
//                 </label>
//                 <br/>
//                 <label>
//                 Ticket Price:
//                     <input
//                         type="price"
//                         name="ticket_price"
//                         value={updatedTicket.ticket_price}
//                         onChange={handleInputChange}
//                 />
//                 </label>
//                 <br/>
//                 <button type="submit">Update Ticket</button>
//             </form>
//                 )}
//             </div>
//             {/* <table>
//                 <thead>
//                     <tr>
//                         <th>Ticket Number</th>
//                         <th>Ticket Holder</th>
//                         <th>Event</th>
//                         <th>Ticket Price</th>
//                         <th>Delete Ticket</th>
//                         <th>Update Ticket</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {tickets.map((ticket) => {
//                     return (
//                         <tr key={ticket.id}>
//                             <td>{ticket.ticket_number}</td>
//                             <td>{ticket.ticket_holder}</td>
//                             <td>{ticket.event.event_name}</td>
//                             <td>{ticket.event.price}</td>
//                             <td><button onClick={() => handleDelete(ticket.id)}>DELETE TICKET</button></td>
//                             <td><button onClick={() => handleUpdate(ticket.id)}>UPDATE TICKET</button></td>
//                         </tr>
//                         )}
//                 )}
//                 </tbody>
//             </table> */}
//         </div>
//     )
// }
// export default Tickets;