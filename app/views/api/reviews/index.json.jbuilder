@reviews.each do |review|
	json.set! review.id do
		json.extract! review, :id, :spot_id, :user_id, :date, :rating, :body
	end
end