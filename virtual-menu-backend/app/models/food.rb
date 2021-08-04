class Food < ApplicationRecord
  include Rails.application.routes.url_helpers

  validates :name, :cost, :calories, :description, :image, presence: true

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
      category_id: self.category.id,
      description: self.description,
      image: self.get_image_url
    }
  end
  
end
