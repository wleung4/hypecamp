class AddColumnToSpots < ActiveRecord::Migration[7.0]
  def change
	add_column :spots, :description, :text, null: false, default: ''
  end
end
