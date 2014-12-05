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

require 'test_helper'

class HeroesTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
