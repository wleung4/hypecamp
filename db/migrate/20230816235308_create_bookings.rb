class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
	  t.references :spot, null: false, foreign_key: true
	  t.references :user, null: false, foreign_key: true
	  t.integer :num_guests, null: false
	  t.float :price, null: false
	  t.date :start_date, null: false
	  t.date :end_date, null: false
	  
      t.timestamps
    end
  end
end
