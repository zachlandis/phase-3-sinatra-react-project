puts "🌱 Seeding spices..."

3.times do 
    event = Event.create(
        event_name: Faker::Lorem.word
        headliner: Faker::Lorem.word
        event_venue: Faker::Lorem.word
        capacity: rand(200..20000)
        event_date: Faker::Date.in_date_period
    )

10.times do
    attendee = Attendee.create(
        first_name: Faker::Name.unique.first_name
        last_name: Faker::Name.unique.last_name
        email: Faker::Internet.email
)

10.times do
    ticket = Ticket.create(
        ticket_number: rand(51246..98365)
        event_id: event.id
        attendee_id: attendee.id
    )



puts "✅ Done seeding!"


t.string :headliner 
t.string :event_venue
t.integer :capacity 
t.datetime :event_date
t.string :event_updates