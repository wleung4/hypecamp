# == Schema Information
#
# Table name: spot_amenities
#
#  id           :bigint           not null, primary key
#  spot_id      :bigint           not null
#  amenities_id :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class SpotAmenity < ApplicationRecord
	validates :spot_id, :amenities_id, presence: true
	
	belongs_to :spot
	belongs_to :amenity
end
