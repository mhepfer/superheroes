class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.integer :heroId, null: false
      t.text :location, null: false
      t.text :time, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :sightings, :heroId
  end
end
