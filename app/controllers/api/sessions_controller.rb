class Api::SessionsController < ApplicationController

#   before_action :require_logged_in, only: [:destroy]
  
  def show
	@user = current_user

	if @user
		render '/api/users/show'
	else
		render json: { user: nil }
	end
  end

  def create
	email = params[:email]
	password = params[:password]
	@user = User.find_by_credentials(email, password)

	if @user
		login(@user)
		render '/api/users/show'
	else
		render json: { errors: ["Invalid email or password"] }, status: 422
	end
  end

  def destroy
	logout if logged_in
	render json: { message: 'success' }
  end
end
