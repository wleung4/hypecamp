# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  spot_id    :bigint           not null
#  user_id    :bigint           not null
#  rating     :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
	validates :spot_id, :user_id, :rating, :body, presence: true

	belongs_to :user
	belongs_to :spot
end
