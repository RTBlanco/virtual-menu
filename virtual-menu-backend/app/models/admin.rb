class Admin < ApplicationRecord
  belongs_to :resturant

  has_secure_password

end
