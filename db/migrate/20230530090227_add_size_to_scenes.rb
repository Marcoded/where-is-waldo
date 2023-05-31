class AddSizeToScenes < ActiveRecord::Migration[7.0]
  def change
    add_column :scenes, :size, :string
  end
end
