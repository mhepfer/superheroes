# == Schema Information
#
# Table name: heroes
#
#  id                  :integer          not null, primary key
#  name                :text
#  created_at          :datetime
#  updated_at          :datetime
#  bio                 :string(255)
#  filepicker_url_icon :string(255)
#  filepicker_url      :string(255)
#

class Heroes < ActiveRecord::Base
	validates :name, :bio, presence: true

	has_many(
		:sightings,
		class_name: "Sightings",
		foreign_key: :heroId,
		primary_key: :id
	)
end
