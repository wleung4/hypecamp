# == Schema Information
#
# Table name: spots
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  name       :string           not null
#  address    :string           not null
#  city       :string           not null
#  country    :string           not null
#  state      :string           not null
#  zip_code   :integer          not null
#  longitude  :float            not null
#  latitude   :float            not null
#  capacity   :integer          not null
#  price      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Spot < ApplicationRecord
	validates :user_id, :name, :address, :city, :country, :state, 
		:zip_code, :longitude, :latitude, :capacity, :price, presence: true

	belongs_to :owner,
		foreign_key: :user_id,
		class_name: :User
	
	has_many :bookings,
		dependent: :destroy

	has_many :reviews,
		dependent: :destroy

	has_many :spot_amenities,
		dependent: :destroy

	has_many :amenities,
		through: :spot_amenities,
		source: :spot
end
