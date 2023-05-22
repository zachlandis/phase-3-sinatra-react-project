class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # CRUD FOR EVENTS
  get "/events" do
    events = Event.all 
    events.to_json(include: :tickets)
  end

  get "/events/:id" do 
    events = Event.find(params[:id])
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
    event.to_json
  end

  # CRUD FOR TICKETS
  get "/tickets" do
    tickets = Ticket.all
    tickets.to_json(include: :event)
  end

  post "/tickets" do
    ticket = Ticket.create(
      ticket_number: params[:ticket_number],
      ticket_holder: params[:ticket_holder],
      ticket_price: params[:ticket_price]
    )
    ticket.to_json
  end

  patch "/tickets/:id" do
    ticket = Ticket.find(params[:id])
    ticket.update(
      ticket_number: params[:ticket_number],
      ticket_holder: params[:ticket_holder],
      ticket_price: params[:ticket_price]
    )
    ticket.to_json
  end

  delete "/tickets/:id" do
    ticket = Ticket.find(params[:id])
    ticket.destroy
    ticket.to_json
  end
end