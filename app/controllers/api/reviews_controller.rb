class Api::ReviewsController < ApplicationController

	def index
		@reviews = Spot.find(params[:spot_id]).reviews
		render :index
	end

	def show
		@review = Review.find(params[:id])
		render :show
	end

	def create
		@review = Review.new(review_params)
		if @review.save
			render :show
		else
			puts @review.errors.full_messages
			render json: @review.errors.full_messages, status: 422
		end
	end

	def destroy
		@review = current_user.reviews.find_by(id: params[:id])
		if @review && @review.user_id === current_user.id && @review.destroy
			@user = current_user
			render :show
		else
			render json: @review.errors.full_messages, status: 422
		end

	end

	def update
		@review = current_user.reviews.find_by(id: params[:id])
		if @review && @review.update(review_params)
			render :show
		else
			render json: @review.errors.full_messages, status: 422
		end
	end

	private
	def review_params
		params.require(:review).permit(:spot_id, :user_id, :date, :rating, :body)
	end
end