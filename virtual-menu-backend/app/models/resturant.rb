class Resturant < ApplicationRecord
  has_many :categories, dependent: :destroy
  has_many :admins, dependent: :destroy
  
end
