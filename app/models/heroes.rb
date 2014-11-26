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

	has_many(
		:sightings,
		class_name: "sightings",
		foreign_key: :heroId,
		primary_key: :id
	)
end
