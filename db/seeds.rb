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

	User.create!(
		email: 'weyman@gmai.com', 
		username: 'itsweyman', 
		password: 'password'
	  )

	puts "Creating spots..."

	Spot.create!(
		user_id: 1, 
		name: "Cabin in the Forest", 
		address: "Yosemite National Park", 
		city: "Groveland", 
		country: "United States", 
		state: "California", 
		zip_code: 95389, 
		longitude: -119.43048531205818, 
		latitude: 37.90241769268008, 
		capacity: 10, 
		price: 100,
		description: "A small and cozy cabin located inside of Yosemite National Park."
	)

	Spot.create!(
		user_id: 2, 
		name: "Camp Loma", 
		address: "29650 Highland Way", 
		city: "Los Gatos", 
		country: "United States", 
		state: "California", 
		zip_code: 95033, 
		longitude: -121.84296062427833, 
		latitude: 37.077645315177556, 
		capacity: 12, 
		price: 55,
		description: "Located in the Santa Cruz Mountains, Camp Loma offers a campsite for friends and family to explore the outdoors."
	)

	Spot.create!(
		user_id: 1, 
		name: "Rob Hill Campground", 
		address: "1475 Central Magazine Rd", 
		city: "San Francisco", 
		country: "United States", 
		state: "California", 
		zip_code: 94129, 
		longitude: -122.47582193019424, 
		latitude: 37.79693139547179, 
		capacity: 32, 
		price: 35,
		description: "North of San Francisco, this campground offers exquisite campsites to many."
	)

	Spot.create!(
		user_id: 2, 
		name: "Kirby Cove Campground", 
		address: "948 Fort Barry", 
		city: "Sausalito", 
		country: "United States", 
		state: "California", 
		zip_code: 94965, 
		longitude: -122.49093006061575, 
		latitude: 37.82844060703431,
		capacity: 30, 
		price: 34,
		description: "This campground in Northern California boasts a great view of the bodies of water."
	)

	puts "Done!"
  end