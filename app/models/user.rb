# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
	has_secure_password

	validates :username, :email, :session_token, presence: true, uniqueness: true
	validates :password_digest, presence: true
	validates :username, length: { in: 3..30 },  format: { without: URI::MailTo::EMAIL_REGEXP, message: "cant be an email" }
	validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
	validates :password, length: { in: 6..255 }, allow_nil: true

	before_validation :ensure_session_token

	def self.find_by_credentials(email, password) 
		user = User.find_by(email: email) 
		user && user.authenticate(password) ? user : nil
	end

	def reset_session_token!
		self.session_token = generate_session_token
		self.save!
		self.session_token
	end

	private 
	def generate_session_token
		token = SecureRandom::urlsafe_base64
		while User.exists?(token)
			token = SecureRandom::urlsafe_base64
		end
		token
	end

	def ensure_session_token
		self.session_token ||= generate_session_token
	end

end
