puts "🌱 Seeding spices..."

10.times do
    attendee = Attendee.create(
        first_name: Faker::Name.unique.first_name
        last_name: Faker::Name.unique.last_name
        email: Faker::Internet.email
)



puts "✅ Done seeding!"
