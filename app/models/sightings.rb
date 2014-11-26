# == Schema Information
#
# Table name: sightings
#
#  id          :integer          not null, primary key
#  heroId      :integer          not null
#  location    :text             not null
#  time        :text             not null
#  description :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Sightings < ActiveRecord::Base
	validates :id, :heroId, :location, :time, :description, presence: true

	belongs_to(
		:superhero,
		class_name: "heroes",
		foreign_key: :heroId,
		primary_key: :id
	)
end
