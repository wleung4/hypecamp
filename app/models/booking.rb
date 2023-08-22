# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  spot_id    :bigint           not null
#  user_id    :bigint           not null
#  num_guests :integer          not null
#  price      :float            not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
	validates :spot_id, :user_id, :num_guests, :price, 
		:start_date, :end_date, presence: true
	
	validates :num_guests, numericality: { greater_than: 0 }

	belongs_to :spot
	belongs_to :user
end
