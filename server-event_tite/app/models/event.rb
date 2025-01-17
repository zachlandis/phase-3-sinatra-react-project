class Event < ActiveRecord::Base
    has_many :tickets
    
    def tickets_sold
        self.tickets.count
    end

    def revenue
        tickets_sold * self.price
    end

    end
end