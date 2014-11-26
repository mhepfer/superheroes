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
end
