class ChangeColumnNameAndBioToProperTypesInHeroes < ActiveRecord::Migration

  def up
    change_column :heroes, :name, :string
    change_column :heroes, :bio, :text
  end

  def down
   change_column :heroes, :name, :text
   change_column :heroes, :bio, :string
  end

end
