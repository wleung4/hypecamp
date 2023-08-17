class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
	  t.references :spot, null: false, foreign_key: true
	  t.references :user, null: false, foreign_key: true
	  t.date :date, null: false
	  t.integer :rating, null: false
	  t.text :body, null: false
	  
      t.timestamps
    end
  end
end
