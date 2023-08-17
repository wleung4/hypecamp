class CreateSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :spots do |t|
	  t.references :user, null: false, foreign_key: true
	  t.string :name, null: false
	  t.string :address, null: false
	  t.string :city, null: false
	  t.string :country, null: false
	  t.string :state, null: false
	  t.integer :zip_code, null: false
	  t.float :longitude, null: false
	  t.float :latitude, null: false
	  t.integer :capacity, null: false
	  t.float :price, null: false

      t.timestamps
    end
  end
end
