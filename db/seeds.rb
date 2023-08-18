# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'


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
		email: 'weyman@gmail.com', 
		username: 'itsweyman', 
		password: 'password'
	)
	
	User.create!(
		email: 'justin@aol.com', 
		username: 'thejustin', 
		password: 'password'
	)

	User.create!(
		email: 'terence@hotmail.com', 
		username: 'tDawg', 
		password: 'password'
	)

	User.create!(
		email: 'piratefire@yahoo.com', 
		username: 'modernpirate', 
		password: 'password'
	)
	puts "Creating spots..."

	spot1 = Spot.create!(
		user_id: 1, 
		name: "Yosemite Pines Cabin", 
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
	file1 = URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg')
	spot1.photos.attach(io: file1, filename: 'cabin.jpg')

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

	Spot.create!(
		user_id: 3, 
		name: "Lake McSwain Campground", 
		address: "9090 Lake McClure Rd", 
		city: "Snelling", 
		country: "United States", 
		state: "California", 
		zip_code: 95369, 
		longitude: -120.27780240482453, 
		latitude: 37.6083011523901,
		capacity: 28, 
		price: 49,
		description: "Campground home to Lake McSwain."
	)
	
	Spot.create!(
		user_id: 5, 
		name: "Woodward Reservoir Regional Park", 
		address: "14528 26 Mile Rd", 
		city: "Oakdale", 
		country: "United States", 
		state: "California", 
		zip_code: 95361, 
		longitude: -120.86738826669885,
		latitude: 37.869667842554854,
		capacity: 48, 
		price: 25,
		description: "Surrounded by the amazing Woodward Reservoir. Experience the amazing sunrise and sunset."
	)

	Spot.create!(
		user_id: 5, 
		name: "Sycamore Canyon Campground", 
		address: "9000 Pacific Coast Hwy", 
		city: "Malibu", 
		country: "United States", 
		state: "California", 
		zip_code: 90265, 
		longitude: -118.99820597551833,
		latitude: 34.079761575280905,
		capacity: 76, 
		price: 59,
		description: "Sycamore Canyon Campground is home the big canyon located in Malibu, California"
	)
	
	Spot.create!(
		user_id: 1, 
		name: "Yogi Bear's Jellystone Park Camp-Resort", 
		address: "14900 CA-12", 
		city: "Lodi", 
		country: "United States", 
		state: "California", 
		zip_code: 95242, 
		longitude: -121.497915416559,
		latitude: 38.11054914940152, 
		capacity: 100, 
		price: 349,
		description: "Enjoy the life in a cabin as well as playing in the resort at Yogi Bear's Jellystone Park Camp-Resort!"
	)

	puts "Done!"