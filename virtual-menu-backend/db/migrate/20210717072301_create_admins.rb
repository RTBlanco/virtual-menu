class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :name
      t.belongs_to :resturant, null: false, foreign_key: true
      

      t.timestamps
    end
  end
end
