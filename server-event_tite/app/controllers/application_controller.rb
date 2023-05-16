class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # CRUD FOR EVENTS
  get "/events" do
    events = Event.all 
    events.to_json(include: :tickets)
  end

  # get "/events/:id" do
  #   event = Event.find(params[:id])
  #   event.to_json
  # end

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


  patch "/events/:id" do
    event = Event.find(params[:id])
    event.update(
      event_name: params[:event_name],
      headliner: params[:headliner],
      event_venue: params[:event_venue],
      capacity: params[:capacity],
      event_date: params[:event_date],
      event_updates: params[:event_updates]
    )
    event.to_json
  end


  delete "/events/:id" do 
    event = Event.find(params[:id])
    event.destroy
    event.to_json
  end

  # CRUD FOR ATTENDEES

  get "/attendees" do
    attendees = Attendee.all
    attendees.to_json
  end

  # get "/attendees/:id" do 
  #   attendee = Attendee.find(params[:id])
  #   attendee.to_json
  # end

  post "/attendees" do
    attendee = Attendee.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email]
    )
    attendee.to_json
  end

end