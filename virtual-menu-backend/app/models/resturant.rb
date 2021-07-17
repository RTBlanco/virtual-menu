class Resturant < ApplicationRecord
  has_many :categories
  has_many :admins
  # has_many :foods, through: :categories
end
