
json.extract! @spot, :id, :user_id, :name, :address, :city, 
	:country, :state, :zip_code, :longitude, :latitude, 
	:capacity, :price, :description

json.photos @spot.photos.map { |file| file.url }