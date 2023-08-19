@spots.each do |spot|
	json.set! spot.id do 
		# json.id spot.id 
		# json.user_id spot.user_id
		# json.name spot.name
		# json.address spot.address
		# json.city spot.city 
		# json.country spot.country
		# json.state spot.state
		# json.zipCode spot.zip_code 
		# json.longitude spot.longitude 
		# json.latitude spot.latitude
		# json.capacity spot.capacity
		# json.price spot.price
		# json.description spot.description
		# json.photoUrls spot.photos.map { |file| url_for(file) }
		json.extract! spot, :id, :user_id, :name, :address, :city, 
		:country, :state, :zip_code, :longitude, :latitude, 
		:capacity, :price, :description
	end
end