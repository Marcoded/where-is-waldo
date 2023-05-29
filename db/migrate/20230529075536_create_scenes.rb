class CreateScenes < ActiveRecord::Migration[7.0]
  def change
    create_table :scenes do |t|
      t.string :char1Pos
      t.string :char2Pos
      t.string :char3Pos
      t.string :imgLink
  

      t.timestamps
    end
  end
end
