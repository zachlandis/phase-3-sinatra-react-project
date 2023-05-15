class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :headliner 
      t.string :event_venue
      t.integer :capacity 
      t.datetime :event_date
      t.string :event_updates
      t.timestamps
    end
  end
end
