class Attendee < ActiveRecord::Base
    has_many :tickets
    has_many :events, through: :tickets
    
    def tickets_held
        self.tickets.map do |ticket|
            ticket.event
        end
    end
    
    def total_spent
        spent_total = 0
        
        self.events.map do |event|
            spent_total += event.price 
        end
    end


end