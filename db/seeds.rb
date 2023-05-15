puts "🌱 Seeding data..."

3.times do 
    event = Event.create(
        event_name: Faker::Lorem.word,
        headliner: Faker::Lorem.word,
        event_venue: Faker::Lorem.word,
        capacity: rand(200..20000),
        event_date: Faker::Date.in_date_period
    )

    attendee = Attendee.create(
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::Internet.email
    )

    ticket = Ticket.create(
        ticket_number: rand(51246..98365),
        event_id: event.id,
        attendee_id: attendee.id
    )
end
puts "🌱 Done seeding!"