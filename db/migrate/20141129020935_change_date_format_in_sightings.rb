class ChangeDateFormatInSightings < ActiveRecord::Migration
  def change
  	def up
  		add_column :sightings, :time, :datetime, null: false
  		Sightings.find_each do |sighting|
  			sighting.date = DateTime.now
  			sighting.save!
  		end
  	end

  	def down
  		remove_column :sightings, :time
  	end

  end
end
