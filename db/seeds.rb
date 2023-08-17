# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
	puts "Destroying tables..."
	User.destroy_all
	Spot.destroy_all

	puts "Resetting primary keys..."
	ApplicationRecord.connection.reset_pk_sequence!('users')
	ApplicationRecord.connection.reset_pk_sequence!('spots')
  
	puts "Creating users..."

	User.create!(
	  email: 'demo@user.io', 
	  username: 'Demo-lition', 
	  password: 'password'
	)

	puts "Creating spots..."

	Spot.create!(
		user_id: 1, 
		name: "Cabin in the Forest", 
		address: "Yosemite National Park", 
		city: "Groveland", country: "United States", 
		state: "California", 
		zip_code: 95389, 
		longitude: -119.43048531205818, 
		latitude: 37.90241769268008, 
		capacity: 10, 
		price: 100
	)

	puts "Done!"
  end