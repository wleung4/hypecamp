class Api::BookingsController < ApplicationController
	before_action :snake_case_params, :attach_authenticity_token

	def index
		@bookings = Booking.all
		render :index
	end

	def show
		@booking = Booking.find(params[:id])
		render :show
	end

	def create
		# puts booking_params
		@booking = Booking.new(booking_params)
		if @booking.save
			render :show
		else
			puts @booking.errors.full_messages
			render json: @booking.errors.full_messages, status: 422
		end
	end

	def destroy
		@booking = current_user.bookings.find_by(id: params[:id])
		if @booking && @booking.user_id === current_user.id && @booking.destroy
			@user = current_user
			render :show
		else
			render json: @booking.errors.full_messages, status: 422
		end
	end

	def update
		@booking = current_user.bookings.find_by(id: params[:id])
		if @booking && @booking.update(booking_params)
			render :show
		else
			render json: @booking.errors.full_messages, status: 422
		end
	end

	private
	def booking_params
		params.require(:booking).permit(:spot_id, :user_id, :num_guests, :price, :start_date, :end_date)
	end
end