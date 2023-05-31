class AddRelativePosToScene < ActiveRecord::Migration[7.0]
  def change
    add_column :scenes, :relativePos, :string
  end
end
