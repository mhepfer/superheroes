class AddCorrectTimeColumnToSightings < ActiveRecord::Migration
  def change
  	add_column :sightings, :time, :datetime
  end
end
