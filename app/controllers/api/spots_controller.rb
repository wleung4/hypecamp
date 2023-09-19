class Api::SpotsController < ApplicationController
	def index 
		@spots = Spot.all
		if params[:search]
			@spots = @spots.where("city ILIKE '%#{params[:search]}%'")
		end

		if params[:capacity]
			@spots = @spots.where("capacity <= #{params[:capacity]}")
		end
		render :index
	end

	def show
		@spot = Spot.find(params[:id])
		render :show
	end

	private 
	def spot_params
		params.require(:spot).permit(photos: [])
	end

end