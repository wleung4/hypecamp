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
	Booking.destroy_all

	puts "Resetting primary keys..."
	ApplicationRecord.connection.reset_pk_sequence!('users')
	ApplicationRecord.connection.reset_pk_sequence!('spots')
	ApplicationRecord.connection.reset_pk_sequence!('bookings')
	
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
		description: "Nestled in the majestic setting of the Sierra Nevada Mountains, the Yosemite Pines Cabin offers 
		a serene escape from the everyday hustle. These cozy cabins, situated just outside the Yosemite National Park, 
		provide comfortable accommodations surrounded by towering pines and breathtaking natural vistas. 
		Guests can enjoy the convenience of modern amenities while staying just a stone's throw away from some of 
		America's most iconic wilderness."

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
		price: 50,
		description: "Situated amidst the picturesque forests of Northern California, 
		Camp Loma is a tranquil site offering spacious plots and an array of amenities. 
		It is a perfect setting for outdoor enthusiasts who enjoy hiking, fishing, and 
		exploring the beautiful natural surroundings. Camp Loma is known for its welcoming 
		atmosphere and scenic, secluded environment."
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
		price: 125,
		description: "As San Francisco’s only campground, Rob Hill Campground is a unique urban 
		escape atop the city’s scenic Presidio. This family-friendly campground provides a comfortable 
		setting amidst eucalyptus trees, with panoramic views of the Pacific Ocean and Golden Gate Bridge. 
		It's a perfect spot for campers seeking both nature and proximity to the vibrant life of the city."
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
		price: 30,
		description: "Overlooking the iconic Golden Gate Bridge, Kirby Cove Campground offers an unforgettable 
		camping experience. Nestled below the rugged coastal cliffs, this intimate campground has pristine beach 
		access and unparalleled views of San Francisco Bay. It's a serene spot for campers to relax, hike, and 
		soak in the picturesque surroundings."
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
		price: 35,
		description: "Situated on the peaceful shores of Lake McSwain in Central California, this campground offers 
		a variety of water-based recreation options, from fishing to boating. With shaded campsites, clean facilities, 
		and a family-friendly atmosphere, Lake McSwain Campground is a perfect retreat for those looking to escape into 
		nature and enjoy some lakeside relaxation."
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
		description: "This sprawling park in Oakdale, California, offers a variety of outdoor activities, including camping, 
		boating, and fishing on the expansive Woodward Reservoir. With over 3,000 acres of land, it’s an outdoor lover’s 
		paradise, boasting miles of shoreline and numerous campsites, from primitive to full hook-up spots."
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
		price: 45,
		description: "Located within the Point Mugu State Park in Southern California, Sycamore Canyon Campground is a nature 
		lover's haven. With access to miles of hiking trails that lead through enchanting sycamore and oak woodlands, and down 
		to the sandy shores of the Pacific Ocean, it is an ideal spot for both relaxation and outdoor adventure."
	)
	
	Spot.create!(
		user_id: 1, 
		name: "Yogi Bear's Jellystone Park Camp", 
		address: "14900 CA-12", 
		city: "Lodi", 
		country: "United States", 
		state: "California", 
		zip_code: 95242, 
		longitude: -121.497915416559,
		latitude: 38.11054914940152, 
		capacity: 100, 
		price: 349,
		description: "This family-oriented campground, part of a popular chain, offers a fun and interactive camping 
		experience. With themed weekends, planned activities, and amenities like pools and mini-golf, Yogi Bear's Jellystone 
		Park Camp is perfect for families looking to combine the joys of camping with entertainment and activities for kids of all ages."
	)

	puts "Done!"