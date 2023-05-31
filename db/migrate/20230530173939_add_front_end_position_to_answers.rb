class AddFrontEndPositionToAnswers < ActiveRecord::Migration[7.0]
  def change
    add_column :answers, :front_end_position, :string
  end
end
