class AddNameToScenes < ActiveRecord::Migration[7.0]
  def change
    add_column :scenes, :char1Name, :string
    add_column :scenes, :char2name, :string
    add_column :scenes, :char3Name, :string
  end
end
