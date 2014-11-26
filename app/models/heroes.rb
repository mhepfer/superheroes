# == Schema Information
#
# Table name: heroes
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#

class Heroes < ActiveRecord::Base
	validates :name, presence: true
end
