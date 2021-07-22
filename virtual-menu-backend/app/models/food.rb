class Food < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :category

  has_one_attached :image

  def get_image_url
    url_for(self.image)
  end

  def serialize 
    {
      id: self.id,
      name: self.name,
      cost: self.cost,
      calories: self.calories,
      category: self.category.id,
      description: self.description
    }
  end
  
end
