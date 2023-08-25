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

	User.create!(
		email: 'oceanblue@gmail.com',
		username: 'deepdive',
		password: 'password'
	)
	
	User.create!(
		email: 'skyflyer@outlook.com',
		username: 'skywardbound',
		password: 'password'
	)
	
	User.create!(
		email: 'mountainhiker@msn.com',
		username: 'rockytops',
		password: 'password'
	)
	
	User.create!(
		email: 'solarflare@zoho.com',
		username: 'sunnyside',
		password: 'password'
	)
	
	User.create!(
		email: 'lunarshadow@aol.com',
		username: 'moonglow',
		password: 'password'
	)
	
	User.create!(
		email: 'forestwhisperer@yahoo.com',
		username: 'treehugger',
		password: 'password'
	)
	
	User.create!(
		email: 'desertdrifter@hotmail.com',
		username: 'sandstorm',
		password: 'password'
	)
	
	User.create!(
		email: 'riverbender@gmail.com',
		username: 'riverrun',
		password: 'password'
	)
	
	User.create!(
		email: 'starshooter@protonmail.com',
		username: 'galactictraveller',
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
		description: 
		"Nestled within the captivating embrace of Yosemite's natural wonders, Yosemite Pines Cabin offers a serene and rustic escape that promises to rejuvenate both body and spirit. Tucked away amidst towering trees and rolling meadows, these cozy cabins provide an idyllic retreat for those seeking to immerse themselves in the tranquility of the wilderness. Each cabin is a gateway to a world of outdoor adventure and peaceful seclusion, allowing guests to disconnect from the hustle and bustle of everyday life and reconnect with the beauty of nature.
		Yosemite Pines Cabin stands as a harmonious blend of comfort and wilderness experience. The cabins are thoughtfully designed to provide modern amenities while retaining a sense of rustic charm. Whether you're lounging on the cabin's porch, listening to the symphony of birdsong, or gazing up at the star-studded night sky, each moment spent at Yosemite Pines Cabin offers a chance to savor the simplicity and splendor of nature."

	)
	spot1.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot1-1.jpg'), filename: 'spot1-1.jpg')
	spot1.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot1-2.jpg'), filename: 'spot1-2.jpg')
	spot1.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot1-3.jpg'), filename: 'spot1-3.jpg')
	spot1.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot1-4.jpg'), filename: 'spot1-4.jpg')
	spot1.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot1-5.jpg'), filename: 'spot1-5.jpg')


	spot2 = Spot.create!(
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
		description: "Camp Loma's charm extends beyond its natural beauty. With a focus on promoting a sense of community and adventure, the camp often offers organized activities such as nature hikes, guided wildlife explorations, and outdoor workshops. These experiences provide opportunities for campers to learn about the local flora and fauna, discover hidden gems within the surrounding landscapes, and develop a deeper appreciation for the environment. In a world where technology often dominates our attention, Camp Loma offers a refreshing chance to unplug, unwind, and rediscover the simple joys of nature in a setting that welcomes all with open arms."
	)
	spot2.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot2-1.jpg'), filename: 'spot2-1.jpg')
	spot2.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot2-2.jpg'), filename: 'spot2-2.jpg')
	spot2.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot2-3.jpg'), filename: 'spot2-3.jpg')
	spot2.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot2-4.jpg'), filename: 'spot2-4.jpg')
	spot2.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot2-5.jpg'), filename: 'spot2-5.jpg')

	spot3 = Spot.create!(
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
		description: "With its 4-acre expanse, Rob Hill Campground offers a limited number of campsites, ensuring an intimate and serene atmosphere. Each site is thoughtfully positioned amidst a grove of eucalyptus and cypress trees, providing a sense of privacy while still being within easy reach of the campground's communal facilities. Rustic charm meets modern convenience, as the campground offers amenities such as picnic tables, fire rings, restrooms, and even a small amphitheater for gatherings and educational programs. As night falls, the distant sounds of the city are replaced by the gentle rustling of leaves, creating an oasis of calm where campers can gather around campfires, share stories, and stargaze against the backdrop of the city lights."
	)

	spot3.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot3-1.jpg'), filename: 'spot3-1.jpg')
	spot3.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot3-2.jpg'), filename: 'spot3-2.jpg')
	spot3.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot3-3.jpg'), filename: 'spot3-3.jpg')
	spot3.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot3-4.jpg'), filename: 'spot3-4.jpg')
	spot3.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot3-5.jpg'), filename: 'spot3-5.jpg')

	spot4 = Spot.create!(
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
		description: "Perched on the rugged coastline of the San Francisco Bay, Kirby Cove Campground offers an enchanting retreat that seamlessly marries natural beauty with a sense of seclusion. Accessible by foot or bike, this hidden gem rewards intrepid adventurers with an extraordinary camping experience that feels worlds away from the bustling urban center. The campground's limited accessibility lends an air of exclusivity, allowing campers to truly disconnect from the daily grind and immerse themselves in the tranquil sounds of crashing waves and rustling leaves."
	)

	spot4.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot4-1.jpg'), filename: 'spot4-1.jpg')
	spot4.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot4-2.jpg'), filename: 'spot4-2.jpg')
	spot4.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot4-3.jpg'), filename: 'spot4-3.jpg')
	spot4.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot4-4.jpg'), filename: 'spot4-4.jpg')
	spot4.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot4-5.jpg'), filename: 'spot4-5.jpg')

	spot5 = Spot.create!(
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
		description: "The campground provides a variety of camping options, from RV sites with hookups to tent sites nestled among the trees. The soothing sounds of the water and the gentle rustling of leaves create a soothing ambiance that envelops visitors in nature's embrace. Anglers will delight in the abundance of fishing opportunities; the lake is regularly stocked with trout and catfish, ensuring an exciting catch for both beginners and seasoned fishermen. Whether you're casting a line from the shore or setting out on a boat to explore the lake's hidden coves, the fishing experience at Lake McSwain is a major draw for visitors."
	)
	
	spot5.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot5-1.jpg'), filename: 'spot5-1.jpg')
	spot5.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot5-2.jpg'), filename: 'spot5-2.jpg')
	spot5.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot5-3.jpg'), filename: 'spot5-3.jpg')
	spot5.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot5-4.jpg'), filename: 'spot5-4.jpg')
	spot5.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot5-5.png'), filename: 'spot5-5.png')

	spot6 = Spot.create!(
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
		description: "The reservoir's vast expanse allows for various watercraft activities, from serene kayaking and paddleboarding to exhilarating jet skiing and wakeboarding. Anglers will find themselves drawn to the shimmering waters, home to a variety of fish species, including bass, catfish, and crappie. Multiple boat ramps provide easy access to the reservoir, inviting visitors to embark on leisurely cruises or exciting water sports. Sandy beaches line the shore, providing ideal spots for sunbathing, building sandcastles, or sharing a lakeside picnic. The tranquil atmosphere encourages moments of relaxation, whether you're reading a book by the water's edge, taking a leisurely stroll, or simply soaking in the beauty of the surroundings."
	)

	spot6.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot6-1.jpg'), filename: 'spot6-1.jpg')
	spot6.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot6-2.jpg'), filename: 'spot6-2.jpg')
	spot6.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot6-3.jpg'), filename: 'spot6-3.jpg')
	spot6.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot6-4.jpg'), filename: 'spot6-4.jpg')
	spot6.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot6-5.jpg'), filename: 'spot6-5.jpg')

	spot7 = Spot.create!(
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
		description: "Campers at Sycamore Canyon are treated to a plethora of activities that cater to various interests. Miles of scenic hiking trails wind through coastal sage scrub and chaparral, leading to panoramic vistas that overlook the Pacific Ocean. The Ray Miller Trail is a favorite among hikers, offering breathtaking coastal views and a chance to witness the vibrant wildflower displays that adorn the landscape in the spring. The adjacent beach beckons with its golden sands and crashing waves, inviting sunbathers, surfers, and beachcombers alike to revel in the coastal ambiance."
	)

	spot7.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot7-1.jpg'), filename: 'spot7-1.jpg')
	spot7.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot7-2.jpg'), filename: 'spot7-2.jpg')
	spot7.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot7-3.jpg'), filename: 'spot7-3.jpg')
	spot7.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot7-4.jpg'), filename: 'spot7-4.jpg')
	spot7.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot7-5.jpg'), filename: 'spot7-5.jpg')
	
	spot8 = Spot.create!(
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
		description: "Yogi Bear's Jellystone Park Camp is a delightful haven for families seeking a whimsical and entertaining camping experience. Inspired by the beloved cartoon character Yogi Bear, this campground brings the spirit of fun and adventure to life. Nestled in picturesque natural surroundings, Jellystone Park Camp offers a unique blend of outdoor recreation, family-friendly amenities, and themed activities that cater to all ages. The park's cheerful atmosphere, complete with appearances by Yogi Bear and his friends, creates an enchanting setting that ignites the imaginations of children and allows parents to relive their own childhood memories."
	)

	spot8.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot8-1.JPG'), filename: 'spot8-1.JPG')
	spot8.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot8-2.jpg'), filename: 'spot8-2.jpg')
	spot8.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot8-3.JPG'), filename: 'spot8-3.JPG')
	spot8.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot8-4.jpg'), filename: 'spot8-4.jpg')
	spot8.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot8-5.jpg'), filename: 'spot8-5.jpg')

	spot9 = Spot.create!(
		user_id: 10, 
		name: "Mount Tamalpais State Park", 
		address: "3801 Panoramic Hwy", 
		city: "Mill Valley", 
		country: "United States", 
		state: "California", 
		zip_code: 94941, 
		longitude: -122.596470,
		latitude: 37.906036, 
		capacity: 60, 
		price: 29,
		description: "Mount Tamalpais State Park is a verdant sanctuary located just north of San Francisco in Marin County, California. Towering over the surrounding landscape at an elevation of 2,571 feet, this iconic peak offers an enchanting escape for nature enthusiasts, hikers, and those seeking breathtaking vistas. The park's diverse ecosystems range from dense redwood forests to open grasslands, creating an oasis of biodiversity within close proximity to the bustling Bay Area. The extensive network of trails meandering through the park caters to all levels of outdoor adventurers, making it a popular destination for day trips and weekend getaways."
	)

	spot9.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot9-1.jpg'), filename: 'spot9-1.jpg')
	spot9.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot9-2.jpg'), filename: 'spot9-2.jpg')
	spot9.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot9-3.jpg'), filename: 'spot9-3.jpg')
	spot9.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot9-4.jpg'), filename: 'spot9-4.jpg')
	spot9.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot9-5.jpg'), filename: 'spot9-5.jpg')

	spot10 = Spot.create!(
		user_id: 10, 
		name: "Samuel P. Taylor State Park", 
		address: "8889 Sir Francis Drake Blvd", 
		city: "Lagunitas", 
		country: "United States", 
		state: "California", 
		zip_code: 94938, 
		longitude: -122.744676,
		latitude: 38.032412, 
		capacity: 60, 
		price: 35,
		description: "
		Nestled within the verdant embrace of Marin County, California, Samuel P. Taylor State Park stands as a serene sanctuary of natural beauty and tranquility. This captivating park invites visitors to step into a world of towering redwoods, babbling brooks, and a lush landscape that seems to be straight out of a fairytale. As you stroll along the shaded trails under the towering canopy of ancient trees, the air is filled with the soothing symphony of birdsong and the gentle gurgle of Lagunitas Creek, which winds its way through the heart of the park. The towering redwoods, some of which are over 600 years old, create an awe-inspiring atmosphere that humbles and rejuvenates all who wander among them."
	)

	spot10.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot10-1.jpg'), filename: 'spot10-1.jpg')
	spot10.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot10-2.jpg'), filename: 'spot10-2.jpg')
	spot10.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot10-3.jpg'), filename: 'spot10-3.jpg')
	spot10.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot10-4.jpg'), filename: 'spot10-4.jpg')
	spot10.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot10-5.jpg'), filename: 'spot10-5.jpg')

	spot11 = Spot.create!(
		user_id: 13, 
		name: "China Camp State Park", 
		address: "101 Peacock Gap Trail", 
		city: "San Rafael", 
		country: "United States", 
		state: "California", 
		zip_code: 94901, 
		longitude: -122.494432,
		latitude: 37.997779, 
		capacity: 50, 
		price: 47,
		description: "Whether you're seeking a day of exploration or a weekend getaway, China Camp State Park offers a diverse range of recreational opportunities. Picnic areas provide a perfect setting for gatherings, with views of the bay serving as a backdrop for your meal. Fishing enthusiasts can try their luck in the bay's abundant waters, hoping to catch striped bass, halibut, or even the occasional leopard shark. As the sun dips below the horizon, the park's serene ambiance makes it an ideal location for stargazing, offering an opportunity to connect with the celestial wonders above. With its unique blend of history, natural beauty, and outdoor activities, China Camp State Park invites you to embark on a journey of discovery and appreciation for the past and present."
	)

	spot11.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot11-1.jpg'), filename: 'spot11-1.jpg')
	spot11.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot11-2.jpeg'), filename: 'spot11-2.jpeg')
	spot11.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot11-3.jpg'), filename: 'spot11-3.jpg')
	spot11.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot11-4.jpeg'), filename: 'spot11-4.jpeg')
	spot11.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot11-5.jpeg'), filename: 'spot11-5.jpeg')

	spot12 = Spot.create!(
		user_id: 12, 
		name: "Angel Island State Park", 
		address: "Angel Island", 
		city: "San Francisco Bay", 
		country: "United States", 
		state: "California", 
		zip_code: 94920, 
		longitude: -122.435978,
		latitude: 37.860097, 
		capacity: 40, 
		price: 60,
		description: "
		Nestled like a jewel in the heart of San Francisco Bay, Angel Island State Park stands as a captivating blend of natural beauty and historical significance. This enchanting destination boasts panoramic views of the city skyline, the iconic Golden Gate Bridge, and the surrounding bay waters. Accessible by ferry, the island offers a tranquil escape from the urban bustle, where visitors can immerse themselves in a unique blend of nature and culture. With its rich history as an immigration station that processed thousands of immigrants entering the United States, Angel Island holds a poignant narrative of the immigrant experience, which is vividly preserved through the various exhibits and guided tours."
	)

	spot12.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot12-1.jpeg'), filename: 'spot12-1.jpeg')
	spot12.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot12-2.jpg'), filename: 'spot12-2.jpg')
	spot12.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot12-3.jpg'), filename: 'spot12-3.jpg')
	spot12.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot12-4.jpg'), filename: 'spot12-4.jpg')
	spot12.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot12-5.jpg'), filename: 'spot12-5.jpg')

	spot13 = Spot.create!(
		user_id: 6, 
		name: "Anthony Chabot Regional Park", 
		address: "9999 Redwood Rd", 
		city: "Castro Valley", 
		country: "United States", 
		state: "California", 
		zip_code: 94546, 
		longitude: -122.109001,
		latitude: 37.772644, 
		capacity: 40, 
		price: 30,
		description: "Anthony Chabot Regional Park stands as a testament to the harmonious coexistence of nature and recreation in the heart of the San Francisco Bay Area. Spanning over 5,000 acres of rolling hills, lush valleys, and serene lakes, the park offers a haven of outdoor experiences for visitors of all ages. Situated just minutes from downtown Oakland, the park's accessibility is a gift to urban dwellers seeking refuge in the tranquility of nature. Hikers, bikers, and equestrians can explore a network of trails that wind through diverse landscapes, providing captivating views of the surrounding valleys and the shimmering waters of Lake Chabot."
	)

	spot13.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot13-1.jpg'), filename: 'spot13-1.jpg')
	spot13.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot13-2.jpg'), filename: 'spot13-2.jpg')
	spot13.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot13-3.jpg'), filename: 'spot13-3.jpg')
	spot13.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot13-4.jpg'), filename: 'spot13-4.jpg')
	spot13.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot13-5.jpg'), filename: 'spot13-5.jpg')

	spot14 = Spot.create!(
		user_id: 10, 
		name: "Mount Diablo State Park", 
		address: "96 Mitchell Canyon Rd", 
		city: "Clayton", 
		country: "United States", 
		state: "California", 
		zip_code: 94517, 
		longitude: -121.941125,
		latitude: 37.881591, 
		capacity: 40, 
		price: 20,
		description: "Rising majestically from the surrounding California landscapes, Mount Diablo State Park stands as a beacon of natural beauty and recreational wonder. Situated just east of the San Francisco Bay Area, this iconic park offers an unforgettable experience for outdoor enthusiasts and nature lovers alike. The centerpiece of the park is Mount Diablo, a prominent peak that pierces the sky at over 3,800 feet, granting panoramic views that span from the Sierra Nevada to the Pacific coastline. The journey to the summit is an adventure in itself, with a network of trails winding through diverse ecosystems, from oak woodlands to grassy slopes adorned with vibrant wildflowers."
	)

	spot14.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot14-1.jpg'), filename: 'spot14-1.jpg')
	spot14.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot14-2.jpg'), filename: 'spot14-2.jpg')
	spot14.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot14-3.jpg'), filename: 'spot14-3.jpg')
	spot14.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot14-4.jpg'), filename: 'spot14-4.jpg')
	spot14.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot14-5.jpg'), filename: 'spot14-5.jpg')

	spot15 = Spot.create!(
		user_id: 10, 
		name: "Tilden Regional Park", 
		address: "Central Park Dr", 
		city: "Berkeley", 
		country: "United States", 
		state: "California", 
		zip_code: 94708, 
		longitude: -122.242546,
		latitude: 37.892767, 
		capacity: 40, 
		price: 25,
		description: "Hikers and nature enthusiasts find Tilden Park to be a true sanctuary. An intricate network of trails crisscross the landscape, ranging from easy strolls to challenging hikes that lead to panoramic viewpoints. The jewel of the park, Lake Anza, offers a picturesque setting for relaxation. Surrounded by verdant hills, this lake is perfect for swimming during the warmer months, and its sandy beach attracts families for picnics and sun-soaked fun. For a dose of nostalgia, the antique carousel in the heart of the park delights young and old alike, evoking a sense of whimsy and delight."
	)

	spot15.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot15-1.jpg'), filename: 'spot15-1.jpg')
	spot15.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot15-2.jpg'), filename: 'spot15-2.jpg')
	spot15.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot15-3.jpg'), filename: 'spot15-3.jpg')
	spot15.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot15-4.jpg'), filename: 'spot15-4.jpg')
	spot15.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot15-5.jpg'), filename: 'spot15-5.jpg')

	spot16 = Spot.create!(
		user_id: 14, 
		name: "Del Valle Regional Park", 
		address: "7000 Del Valle Rd", 
		city: "Livermore", 
		country: "United States", 
		state: "California", 
		zip_code: 94550, 
		longitude: -121.711014,
		latitude: 37.591392, 
		capacity: 40, 
		price: 36,
		description: "Del Valle Regional Park stands as a pristine oasis of outdoor recreation in the heart of California's East Bay. Spanning over 4,300 acres, this expansive park is a beloved destination for nature enthusiasts, families, and outdoor adventurers alike. At its heart lies the picturesque Del Valle Reservoir, a sprawling body of water framed by rolling hills and shaded picnic areas. Boating, fishing, and swimming are popular pastimes here, offering a refreshing escape from the hustle and bustle of urban life. The lakeshore's sandy beaches invite visitors to bask in the sun or take a leisurely dip in the cool waters, while the surrounding trails cater to hikers, bikers, and equestrians, offering varying levels of difficulty and breathtaking views."
	)

	spot16.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot16-1.jpg'), filename: 'spot16-1.jpg')
	spot16.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot16-2.jpg'), filename: 'spot16-2.jpg')
	spot16.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot16-3.jpg'), filename: 'spot16-3.jpg')
	spot16.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot16-4.jpg'), filename: 'spot16-4.jpg')
	spot16.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot16-5.jpg'), filename: 'spot16-5.jpg')

	spot17 = Spot.create!(
		user_id: 6, 
		name: "Coyote Hills Regional Park", 
		address: "8000 Patterson Ranch Rd", 
		city: "Fremont", 
		country: "United States", 
		state: "California", 
		zip_code: 94555, 
		longitude: -122.093731,
		latitude: 37.553493, 
		capacity: 40, 
		price: 40,
		description: "Coyote Hills Regional Park stands as a captivating natural oasis in the heart of the bustling San Francisco Bay Area. Stretching over 978 acres, this park offers a diverse blend of landscapes, including rolling hills, expansive marshlands, and serene meadows, all of which are teeming with a rich array of plant and animal life. The park's unique topography not only provides a haven for a variety of bird species but also invites visitors to explore its network of trails, uncovering the hidden beauty of its marshes, wildflowers, and historic sites."
	)

	spot17.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot17-1.jpg'), filename: 'spot17-1.jpg')
	spot17.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot17-2.jpg'), filename: 'spot17-2.jpg')
	spot17.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot17-3.jpg'), filename: 'spot17-3.jpg')
	spot17.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot17-4.jpg'), filename: 'spot17-4.jpg')
	spot17.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot17-5.jpg'), filename: 'spot17-5.jpg')
	
	spot18 = Spot.create!(
		user_id: 8, 
		name: "San Bruno Mountain State Park", 
		address: "555 Guadalupe Canyon Pkwy", 
		city: "Brisbane", 
		country: "United States", 
		state: "California", 
		zip_code: 94005, 
		longitude: -122.419416,
		latitude: 37.774929, 
		capacity: 50, 
		price: 30,
		description: "As a haven for local flora and fauna, San Bruno Mountain State Park offers a haven for both plant and animal species that are uniquely adapted to this coastal environment. Rare and endangered butterflies, such as the Mission Blue and Callippe Silverspot, find sanctuary here, flitting amidst the wildflowers and native grasses. The park's trails cater to a range of outdoor activities, from leisurely strolls to challenging hikes, inviting visitors to immerse themselves in the park's natural wonders while learning about its ecological significance."
	)

	spot18.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot18-1.jpg'), filename: 'spot18-1.jpg')
	spot18.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot18-2.jpg'), filename: 'spot18-2.jpg')
	spot18.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot18-3.jpg'), filename: 'spot18-3.jpg')
	spot18.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot18-4.jpeg'), filename: 'spot18-4.jpeg')
	spot18.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot18-5.jpg'), filename: 'spot18-5.jpg')

	spot19 = Spot.create!(
		user_id: 11, 
		name: "Death Valley National Park", 
		address: "Death Valley", 
		city: "Furnace Creek", 
		country: "United States", 
		state: "California", 
		zip_code: 92328, 
		longitude: -117.077206,
		latitude: 36.505389, 
		capacity: 50, 
		price: 39,
		description: "Spanning across a vast expanse of the Mojave Desert, Death Valley National Park stands as a testament to the raw power and beauty of extreme landscapes. With its otherworldly terrain, scorching temperatures, and diverse geological formations, the park is a striking mosaic of salt flats, sand dunes, rugged mountains, and vast canyons. The shimmering Badwater Basin, the lowest point in North America, is a surreal landscape where the salt flats seem to stretch infinitely, creating an almost alien panorama. Amidst this seemingly inhospitable environment, remarkable adaptations and tenacious life forms have evolved to endure the harsh conditions, creating a delicate ecological balance that speaks to the resilience of life in the most challenging of habitats."
	)

	spot19.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot19-1.jpg'), filename: 'spot19-1.jpg')
	spot19.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot19-2.jpeg'), filename: 'spot19-2.jpeg')
	spot19.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot19-3.jpg'), filename: 'spot19-3.jpg')
	spot19.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot19-4.jpg'), filename: 'spot19-4.jpg')
	spot19.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot19-5.jpg'), filename: 'spot19-5.jpg')
	
	spot20 = Spot.create!(
		user_id: 11, 
		name: "Anza-Borrego Desert State Park", 
		address: "200 Palm Canyon Dr", 
		city: "Borrego Springs", 
		country: "United States", 
		state: "California", 
		zip_code: 92004, 
		longitude: -116.282317,
		latitude: 33.260221, 
		capacity: 50, 
		price: 29,
		description: "As the largest state park in California, Anza-Borrego offers a plethora of outdoor adventures for those willing to explore its untamed expanses. Hiking trails wind through narrow slot canyons, leading to hidden waterfalls and secluded pools. Jeep trails traverse the remote badlands, providing a sense of solitude amidst the barren beauty. The park's starlit skies are a haven for stargazers, offering unobstructed views of celestial wonders against the backdrop of the desert's tranquility."
	)

	spot20.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot20-1.jpg'), filename: 'spot20-1.jpg')
	spot20.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot20-2.jpg'), filename: 'spot20-2.jpg')
	spot20.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot20-3.jpg'), filename: 'spot20-3.jpg')
	spot20.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot20-4.jpg'), filename: 'spot20-4.jpg')
	spot20.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot20-5.jpg'), filename: 'spot20-5.jpg')

	spot21 = Spot.create!(
		user_id: 13, 
		name: "Pfeiffer Big Sur State Park", 
		address: "47225 Highway 1", 
		city: "Big Sur", 
		country: "United States", 
		state: "California", 
		zip_code: 93920, 
		longitude: -121.781158,
		latitude: 36.247620, 
		capacity: 50, 
		price: 44,
		description: "Pfeiffer Big Sur State Park stands as a majestic testament to the raw beauty of California's central coast. With its sprawling wilderness of redwood groves, dramatic coastal cliffs, and serene riverbanks, the park creates an immersive experience that captures the essence of Big Sur's rugged charm. Towering ancient redwoods, some of which are more than 2,500 years old, create a cathedral-like ambiance as their colossal trunks stretch toward the heavens. The Big Sur River meanders through the park, offering a soothing backdrop for picnics, leisurely strolls, and even refreshing dips on warm days."
	)

	spot21.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot21-1.jpg'), filename: 'spot21-1.jpg')
	spot21.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot21-2.jpg'), filename: 'spot21-2.jpg')
	spot21.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot21-3.jpg'), filename: 'spot21-3.jpg')
	spot21.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot21-4.jpg'), filename: 'spot21-4.jpg')
	spot21.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot21-5.jpg'), filename: 'spot21-5.jpg')

	spot22 = Spot.create!(
		user_id: 13, 
		name: "Mount San Jacinto State Park", 
		address: "25905 Highway 243", 
		city: "Idyllwild", 
		country: "United States", 
		state: "California", 
		zip_code: 92549, 
		longitude: -116.730003,
		latitude: 33.814461, 
		capacity: 50, 
		price: 42,
		description: "Mount San Jacinto State Park offers a captivating escape into the splendor of Southern California's natural diversity. Spanning across the rugged terrain of the San Jacinto Mountains, the park is a haven for outdoor enthusiasts and nature lovers. Its centerpiece is the majestic Mount San Jacinto, a towering peak that rises to over 10,800 feet, providing a dramatic backdrop for the park's varied ecosystems. With lush alpine forests, meadows adorned with wildflowers, and rocky landscapes, visitors can explore a range of environments as they ascend the mountain's trails. The park's accessible aerial tramway carries adventurers from the desert floor to the cooler heights, granting access to breathtaking vistas and a refreshing change of climate."
	)

	spot22.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot22-1.jpg'), filename: 'spot22-1.jpg')
	spot22.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot22-2.jpg'), filename: 'spot22-2.jpg')
	spot22.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot22-3.jpg'), filename: 'spot22-3.jpg')
	spot22.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot22-4.jpg'), filename: 'spot22-4.jpg')
	spot22.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot22-5.jpg'), filename: 'spot22-5.jpg')

	spot23 = Spot.create!(
		user_id: 11, 
		name: "Lassen Volcanic National Park", 
		address: "Lassen Volcanic National Park", 
		city: "Mineral", 
		country: "United States", 
		state: "California", 
		zip_code: 96063, 
		longitude: -121.511615,
		latitude: 40.497660, 
		capacity: 50, 
		price: 19,
		description: "Lassen Volcanic National Park, a geological marvel located in Northern California, showcases the remarkable forces of nature that have shaped our planet. This dynamic landscape is defined by its captivating volcanic features, which include steaming fumaroles, boiling mud pots, and the awe-inspiring Lassen Peak, one of the world's largest plug dome volcanoes. The park serves as a living laboratory, offering visitors the chance to witness the ongoing processes that continue to mold the earth's surface. From the otherworldly Bumpass Hell geothermal area to the scenic beauty of Emerald Lake, the park is a testament to the raw power and beauty of natural forces."
	)

	spot23.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot23-1.jpg'), filename: 'spot23-1.jpg')
	spot23.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot23-2.jpg'), filename: 'spot23-2.jpg')
	spot23.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot23-3.jpg'), filename: 'spot23-3.jpg')
	spot23.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot23-4.jpg'), filename: 'spot23-4.jpg')
	spot23.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot23-5.jpg'), filename: 'spot23-5.jpg')

	spot24 = Spot.create!(
		user_id: 11, 
		name: "Channel Islands National Park", 
		address: "1901 Spinnaker Drive", 
		city: "Ventura", 
		country: "United States", 
		state: "California", 
		zip_code: 93001, 
		longitude: -119.552003,
		latitude: 34.006930, 
		capacity: 50, 
		price: 24,
		description: "Beyond its stunning underwater realms, Channel Islands National Park boasts a wealth of hiking trails that lead adventurers through diverse landscapes, from coastal bluffs adorned with vibrant wildflowers to peaceful canyons shaded by ancient oak trees. Each island tells a story of geological transformation, with evidence of volcanic activity and the forces that shaped the rugged terrain. Archaeological sites provide insights into the lives of indigenous peoples who once called these islands home, offering a glimpse into their rich history and connection to the land."
	)

	spot24.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot24-1.jpg'), filename: 'spot24-1.jpg')
	spot24.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot24-2.jpeg'), filename: 'spot24-2.jpeg')
	spot24.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot24-3.jpg'), filename: 'spot24-3.jpg')
	spot24.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot24-4.jpg'), filename: 'spot24-4.jpg')
	spot24.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot24-5.jpg'), filename: 'spot24-5.jpg')

	spot25 = Spot.create!(
		user_id: 10, 
		name: "Prairie Creek Redwoods State Park", 
		address: "Newton B. Drury Scenic Pkwy", 
		city: "Orick", 
		country: "United States", 
		state: "California", 
		zip_code: 95555, 
		longitude: -124.023682,
		latitude: 41.403164, 
		capacity: 50, 
		price: 20,
		description: "Prairie Creek Redwoods State Park, located in Northern California, is a captivating testament to the awe-inspiring grandeur of ancient redwood forests. This pristine wilderness is a sanctuary of towering trees, some of which have stood for centuries, reaching heights that seem to touch the heavens. The park's dense groves create a serene and mystical atmosphere, where dappled sunlight filters through the canopy, illuminating the vibrant undergrowth below. Visitors to Prairie Creek are treated to an immersive experience as they walk amidst these giant sentinels, their sheer size and age invoking a sense of wonder and reverence for the natural world."
	)

	spot25.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot25-1.jpeg'), filename: 'spot25-1.jpeg')
	spot25.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot25-2.jpg'), filename: 'spot25-2.jpg')
	spot25.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot25-3.jpg'), filename: 'spot25-3.jpg')
	spot25.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot25-4.jpg'), filename: 'spot25-4.jpg')
	spot25.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot25-5.jpg'), filename: 'spot25-5.jpg')

	spot26 = Spot.create!(
		user_id: 10, 
		name: "Lava Beds National Monument", 
		address: "1 Indian Well HQ", 
		city: "Tulelake", 
		country: "United States", 
		state: "California", 
		zip_code: 96134, 
		longitude: -121.508183,
		latitude: 41.714368, 
		capacity: 50, 
		price: 10,
		description: "Lava Beds National Monument offers an otherworldly journey into the depths of a volcanic landscape. This unique destination in Northern California's high desert showcases the raw power of geological forces. Home to over 700 lava tube caves, Lava Beds National Monument invites visitors to explore underground realms sculpted by ancient eruptions. These intricate caverns reveal a stunning display of formations, from stalactites and stalagmites to delicate mineral deposits, creating a mesmerizing and eerie environment that feels like stepping into a subterranean wonderland."
	)

	spot26.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot26-1.jpg'), filename: 'spot26-1.jpg')
	spot26.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot26-2.jpg'), filename: 'spot26-2.jpg')
	spot26.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot26-3.jpg'), filename: 'spot26-3.jpg')
	spot26.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot26-4.jpg'), filename: 'spot26-4.jpg')
	spot26.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot26-5.jpg'), filename: 'spot26-5.jpg')

	spot27 = Spot.create!(
		user_id: 13, 
		name: "Lake Sabrina Campground", 
		address: "Lake Sabrina Rd", 
		city: "Bishop", 
		country: "United States", 
		state: "California", 
		zip_code: 93514, 
		longitude: -118.613502,
		latitude: 37.372283, 
		capacity: 50, 
		price: 10,
		description: "Lake Sabrina Campground is a serene oasis tucked away in the Eastern Sierra region of California. Surrounded by the towering peaks of the Sierra Nevada mountains, the campground offers a tranquil alpine retreat for nature enthusiasts and outdoor adventurers alike. The campground's proximity to Lake Sabrina provides campers with the opportunity to indulge in a variety of water-based activities, from fishing for trout in the pristine lake to kayaking or simply enjoying the peaceful ambiance of the water's edge. As the sun sets behind the rugged mountain horizon, the campground transforms into a stargazer's paradise, offering unobstructed views of the night sky far from the city lights."
	)

	spot27.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot27-1.jpg'), filename: 'spot27-1.jpg')
	spot27.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot27-2.jpg'), filename: 'spot27-2.jpg')
	spot27.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot27-3.jpg'), filename: 'spot27-3.jpg')
	spot27.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot27-4.jpg'), filename: 'spot27-4.jpg')
	spot27.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot27-5.jpg'), filename: 'spot27-5.jpg')

	spot28 = Spot.create!(
		user_id: 14, 
		name: "Black Rock Campground", 
		address: "Canebrake Rd", 
		city: "Little Lake", 
		country: "United States", 
		state: "California", 
		zip_code: 93542, 
		longitude: -117.977241,
		latitude: 35.966438, 
		capacity: 50, 
		price: 39,
		description: "The campground's proximity to numerous hiking trails allows adventurers to explore Lassen's remarkable geothermal features, from bubbling mud pots and steaming fumaroles to the awe-inspiring Devastated Area, a stark reminder of the area's volcanic past. As the day transitions into night, the absence of urban light pollution reveals a breathtaking canvas of stars above, making stargazing an unforgettable part of the Black Rock Campground experience. With basic amenities like restrooms and potable water available, campers can disconnect from the modern world and relish in the simple pleasures of a campfire-cooked meal and the camaraderie of fellow nature enthusiasts."
	)

	spot28.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot28-1.jpg'), filename: 'spot28-1.jpg')
	spot28.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot28-2.jpg'), filename: 'spot28-2.jpg')
	spot28.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot28-3.jpg'), filename: 'spot28-3.jpg')
	spot28.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot28-4.jpg'), filename: 'spot28-4.jpg')
	spot28.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot28-5.jpg'), filename: 'spot28-5.jpg')

	spot29 = Spot.create!(
		user_id: 14, 
		name: "Lone Pine Campground", 
		address: "Whitney Portal Rd", 
		city: "Lone Pine", 
		country: "United States", 
		state: "California", 
		zip_code: 93545, 
		longitude: -118.132256,
		latitude: 36.608913, 
		capacity: 50, 
		price: 32,
		description: "Perched at the foot of the Sierra Nevada's dramatic landscapes, Lone Pine Campground provides a rustic and natural camping experience. With clear, crisp air and the soothing sounds of nearby creeks, campers can enjoy a sense of tranquility that only the mountains can offer. The campground's proximity to the iconic Mount Whitney, the tallest peak in the contiguous United States, makes it a favored destination for hikers aiming to conquer its challenging trails. As the sun sets, the starry skies above the campground transform into a dazzling display, perfect for stargazing and contemplation."
	)

	spot29.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot29-1.jpg'), filename: 'spot29-1.jpg')
	spot29.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot29-2.jpg'), filename: 'spot29-2.jpg')
	spot29.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot29-3.jpg'), filename: 'spot29-3.jpg')
	spot29.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot29-4.jpeg'), filename: 'spot29-4.jpeg')
	spot29.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot29-5.jpg'), filename: 'spot29-5.jpg')

	spot30 = Spot.create!(
		user_id: 8, 
		name: "Point Reyes National Seashore", 
		address: "1 Bear Valley Rd", 
		city: "Point Reyes Station", 
		country: "United States", 
		state: "California", 
		zip_code: 94956, 
		longitude: -122.798463,
		latitude: 38.039189, 
		capacity: 40, 
		price: 64,
		description: "Nestled along the rugged coastline of Northern California, Point Reyes National Seashore 
		stands as a captivating tapestry of nature's finest creations. Encompassing over 70,000 acres of pristine 
		wilderness, this national treasure offers a breathtaking blend of diverse landscapes, from wind-swept beaches 
		and towering cliffs to lush forests and sprawling meadows. The seashore's defining feature is the Point Reyes 
		Peninsula, a windswept promontory jutting into the Pacific Ocean, providing visitors with panoramic vistas that 
		stretch to the horizon. The rhythmic symphony of crashing waves against the jagged cliffs creates a mesmerizing 
		ambiance, while the iconic Point Reyes Lighthouse stands as a sentinel, guiding ships through the mist for generations. 
		This protected sanctuary is not only a haven for marine and terrestrial wildlife, including seals, whales, and an 
		array of bird species, but also a testament to the raw beauty that nature can forge over millennia."
	)

	spot30.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot30-1.jpg'), filename: 'spot30-1.jpg')
	spot30.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot30-2.jpg'), filename: 'spot30-2.jpg')
	spot30.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot30-3.jpg'), filename: 'spot30-3.jpg')
	spot30.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot30-4.jpg'), filename: 'spot30-4.jpg')
	spot30.photos.attach(io: URI.open('https://hypecamp-seeds.s3.us-west-1.amazonaws.com/spot30-5.jpg'), filename: 'spot30-5.jpg')


	
	puts "Done!"