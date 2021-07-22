class Resturant < ApplicationRecord
  has_many :categories, dependent: :destroy
  has_many :admins, dependent: :destroy

  has_one_attached :image

  def serialize
    {
      name: self.name,
      categories: self.categories.map{|cat| cat.serialize_one}
    }
  end

end
