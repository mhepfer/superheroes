class AddLatLongToSightings < ActiveRecord::Migration
  def change
    add_column :sightings, :latitude, :integer
    add_column :sightings, :longitude, :integer
    remove_column :sightings, :location
    add_column :heroes, :bio, :string
  end
end
