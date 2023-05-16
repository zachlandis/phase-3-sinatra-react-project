puts "🌱 Seeding data..."

3.times do 
    event = Event.create(
        event_name: Faker::Lorem.word,
        headliner: Faker::Lorem.word,
        event_venue: Faker::Lorem.word,
        capacity: rand(200..20000),
        event_date: Faker::Date.in_date_period,
        price: rand(200..300)
    )

    10.times do

        Ticket.create(
            ticket_number: rand(51246..98365),
            ticket_holder: Faker::Name.name,
            ticket_price: event.price,
            event_id: event.id
        )
    end
end
puts "🌱 Done seeding!"