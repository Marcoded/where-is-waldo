class AddImageToAnswers < ActiveRecord::Migration[7.0]
  def change
    add_column :answers, :image, :string
  end
end
