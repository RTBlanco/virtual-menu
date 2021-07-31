class Food < ApplicationRecord
  include Rails.application.routes.url_helpers

  # used fake image for testing images

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
      description: self.description,
      image: "https://res.cloudinary.com/djgdxb8xo/image/upload/v1627718943/580b57fcd9996e24bc43c1aa_ho23vw.png"
    }
  end
  
end
