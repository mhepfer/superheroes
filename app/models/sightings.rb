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
	validates :heroId, :latitude, :longitude, :time, :description, presence: true
	validates_datetime :time, :on_or_before => lambda { DateTime.now }, 
														:on_or_before_message => "Woh there time traveler. We only accept events which already happened"

	belongs_to(
		:superhero,
		class_name: "Heroes",
		foreign_key: :heroId,
		primary_key: :id
	)

end
