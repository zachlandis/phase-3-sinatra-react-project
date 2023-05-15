class Event < ActiveRecord::Base
    has_many :tickets
    has_many :attendees, through: :tickets
    
    def tickets_sold
        self.tickets.count
    end

    def revenue
        tickets_sold * self.price
    end

    def all_attendees
        self.attendees.map do |attendee|
            "#{attendee.first_name} #{attendee.last_name} - #{attendee.email}"
    
        end
    end
end