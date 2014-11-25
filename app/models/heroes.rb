class Heroes < ActiveRecord::Base
	validates :name, presence: true
end
