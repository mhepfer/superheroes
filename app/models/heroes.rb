# == Schema Information
#
# Table name: heroes
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#  bio        :string(255)
#

class Heroes < ActiveRecord::Base
	validates :name, :bio, presence: true

	has_many(
		:sightings,
		class_name: "sightings",
		foreign_key: :heroId,
		primary_key: :id
	)
end
