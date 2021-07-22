class AddDescriptionToFoods < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :description, :string
  end
end
