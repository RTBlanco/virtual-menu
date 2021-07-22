class AddAboutToResturants < ActiveRecord::Migration[6.1]
  def change
    add_column :resturants, :about, :string
  end
end
