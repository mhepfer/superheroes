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
#  latitude    :float            not null
#  longitude   :float            not null
#

require 'test_helper'

class SightingsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
