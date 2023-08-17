class CreateSpotAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :spot_amenities do |t|
	  t.references :spot, null: false, foreign_key: true
	  t.references :amenities, null: false, foreign_key: true
      t.timestamps
    end
  end
end
