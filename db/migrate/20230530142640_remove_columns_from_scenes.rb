class RemoveColumnsFromScenes < ActiveRecord::Migration[7.0]
  def change
    remove_column :scenes, :char1Pos
    remove_column :scenes, :char2Pos
    remove_column :scenes, :char3Pos
    remove_column :scenes, :char1Name
    remove_column :scenes, :char2name
    remove_column :scenes, :char3Name
    remove_column :scenes, :relativePos
  end
end
