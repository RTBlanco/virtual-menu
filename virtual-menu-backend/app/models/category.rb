class Category < ApplicationRecord
  belongs_to :resturant
  has_many :foods, dependent: :destroy

  def serialize 
    {
      id: self.id,
      name: self.name
    }
  end

  def serialize_one
    serial = self.serialize  
    serial[:foods] = self.foods.map{|food| food.serialize}
    serial
  end
end
