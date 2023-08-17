json.spot do 
	json.extract! @spot, :id, :user_id, :name, :address, :city, 
		:country, :state, :zip_code, :longitude, :latitude, 
		:capacity, :price, :description
end