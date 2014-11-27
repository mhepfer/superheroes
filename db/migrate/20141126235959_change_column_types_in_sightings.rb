class ChangeColumnTypesInSightings < ActiveRecord::Migration
  def up
  	change_column :sightings, :latitude, :float, null: false
  	change_column :sightings, :longitude, :float, null: false
  end

  def down
  	change_column :sightings, :latitude, :integer
  	change_column :sightings, :longitude, :integer
  end

end
