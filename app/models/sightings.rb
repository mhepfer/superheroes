# == Schema Information
#
# Table name: sightings
#
#  id          :integer          not null, primary key
#  heroId      :integer          not null
#  time        :text             not null
#  description :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#  latitude    :integer
#  longitude   :integer
#

class Sightings < ActiveRecord::Base
	validates :id, :heroId, :latitude, :longitude, :time, :description, presence: true

	belongs_to(
		:superhero,
		class_name: "heroes",
		foreign_key: :heroId,
		primary_key: :id
	)

end
