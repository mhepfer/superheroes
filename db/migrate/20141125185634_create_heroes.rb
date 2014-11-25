class CreateHeroes < ActiveRecord::Migration
  def change
    create_table :heroes do |t|
      t.text :name, null: false

      t.timestamps
    end
  end
end
