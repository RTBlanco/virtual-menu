class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.decimal :cost
      t.integer :calories
      t.belongs_to :category, null: false, foreign_key: true
       

      t.timestamps
    end
  end
end
