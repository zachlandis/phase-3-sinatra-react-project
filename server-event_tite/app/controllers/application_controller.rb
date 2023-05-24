class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # CRUD FOR EVENTS
  get "/events" do
    events = Event.all
    events.to_json(include: :tickets)
  end

  post "/events" do
    event = Event.create(
      event_name: params[:event_name],
      headliner: params[:headliner],
      event_venue: params[:event_venue],
      capacity: params[:capacity],
      event_date: params[:event_date],
      event_updates: params[:event_updates]
    )
    event.to_json(include: :tickets)
  end

  get "/events/:id" do
    event = Event.find(params[:id])
    event.to_json(include: :tickets)
  end
  

  # CRUD FOR TICKETS
  
  get "/tickets" do
    tickets = Ticket.all
    tickets.to_json
  end
  
  delete "/events/:event_id/tickets/:ticket_id" do
    event = Event.find(params[:event_id])
    ticket = event.tickets.find(params[:ticket_id])
    ticket.destroy
  end

  patch "/events/:event_id/tickets/:ticket_id" do
    event = Event.find(params[:event_id])
    ticket = event.tickets.find(params[:ticket_id])
    ticket.update(
      ticket_holder: params[:ticket_holder],
      ticket_number: params[:ticket_number],
      ticket_price: params[:ticket_price],
      event_id: params[:event_id],      
    )
    ticket.to_json
  end





end

