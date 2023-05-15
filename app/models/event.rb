class Event
    has_many :tickets
    has_many :attendees, through: :tickets
end