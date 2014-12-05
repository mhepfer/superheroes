class AddColumnsForFilepickerToSightingsAndHeroes < ActiveRecord::Migration
  def change
  	add_column :sightings, :filepicker_url, :string
  	add_column :heroes, :filepicker_url_icon, :string
  	add_column :heroes, :filepicker_url, :string
  end
end
