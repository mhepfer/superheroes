# == Schema Information
#
# Table name: sightings
#
#  id          :integer          not null, primary key
#  heroId      :integer          not null
#  description :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#  latitude    :float            not null
#  longitude   :float            not null
#  time        :datetime
#

class Sightings < ActiveRecord::Base
	validates :id, :heroId, :latitude, :longitude, :time, :description, presence: true

	belongs_to(
		:superhero,
		class_name: "Heroes",
		foreign_key: :heroId,
		primary_key: :id
	)

end
