# == Schema Information
#
# Table name: amenities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Amenity < ApplicationRecord
	validates :name, presence: true

	has_many :spot_amenities,
		dependent: :destroy

	has_many :spots,
		through: :spot_amenities,
		source: :spot,
end
