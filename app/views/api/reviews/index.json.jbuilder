@reviews.each do |review|
	json.set! review.id do
		json.extract! review, :id, :spot_id, :user_id, :rating, :body
	end
end