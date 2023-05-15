class Attendee < ActiveRecord::Base
    has_many :tickets
    has_many :events, through: :tickets

    # def ticket_holder
    #     "#{first_name} #{last_name}'s ticket number for #{event_name} is #{ticket_number}"
    # end

end