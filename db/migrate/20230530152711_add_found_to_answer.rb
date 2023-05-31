class AddFoundToAnswer < ActiveRecord::Migration[7.0]
  def change
    add_column :answers, :found, :boolean, default: false
  end
end
