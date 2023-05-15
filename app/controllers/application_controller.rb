class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/events" do
    events = Event.all 
    events.to_json
  end

  get "/events/:id" do
    event = Event.find(params[:id])
    event.to_json
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

  


end
