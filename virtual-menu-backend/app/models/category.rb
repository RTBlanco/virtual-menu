class Category < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :resturant
  has_many :foods, dependent: :destroy
  has_one_attached :image

  # accepts_nested_attributes_for :foods, reject_if: proc { |attributes| attributes['name'].blank? }

  def get_image_url
    url_for(self.image)
  end

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
