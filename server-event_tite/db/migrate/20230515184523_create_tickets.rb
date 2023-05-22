class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :ticket_number
      t.integer :ticket_price
      t.string :ticket_holder
      t.integer :event_id
      t.timestamps
    end
  end
end
