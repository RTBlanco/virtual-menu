class Resturant < ApplicationRecord
  has_many :categories
  # has_many :foods, through: :categories
  has_one :admin
end
