class Ticket < ActiveRecord::Base
    belongs_to :attendee
    belongs_to :event

    def ticket_holder
        "#{self.attendee.first_name} #{self.attendee.last_name}"
    end

    # def ticket_price
    #     self.event.price
    # end

end