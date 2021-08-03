class Resturant < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :categories, dependent: :destroy
  has_many :admins, dependent: :destroy

  has_one_attached :image

  def get_image_url
    url_for(self.image)
  end

  def serialize
    {
      name: self.name,
      categories: self.categories.map{|cat| cat.serialize_one},
      about: self.about,
      image: self.get_image_url
    }
  end

end
