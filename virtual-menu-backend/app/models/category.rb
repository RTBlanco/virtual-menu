class Category < ApplicationRecord
  belongs_to :resturant
  has_many :foods
end
