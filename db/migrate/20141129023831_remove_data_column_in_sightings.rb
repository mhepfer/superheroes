class RemoveDataColumnInSightings < ActiveRecord::Migration
  def change
  	remove_column :sightings, :time
  end
end
