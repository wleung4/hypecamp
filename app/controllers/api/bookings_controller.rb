class Api::BookingsController < ApplicationController

	def index
		@bookings = Booking.all
		render :index
	end

	def show
		@booking = Booking.find(id: params[:id])
		render :show
	end

	def create
		@booking = Booking.new(booking_params)
		if @booking.save
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def destroy
		@booking = current_user.bookings.find_by(id: params[:id])
		if @booking && @booking.delete
			@user = current_user
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
		@booking = current_user.bookings.find_by(id: params[:id])
		if @booking && @booking.update(booking_params)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private
	def booking_params
		params.require(:booking).permit(:spot_id, :user_id, :num_guests, :price, :start_date, :end_date)
	end
end