@bookings.each do |booking|
	json.set! booking.id do
		json.extract! booking, :id, :spot_id, :user_id, :num_guests, 
			:price, :start_date, :end_date
	end
end