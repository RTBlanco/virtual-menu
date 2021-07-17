class Admin < ApplicationRecord
  belongs_to :resturant

  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

  def serialize 
    {
      id: self.id,
      name: self.name,
      username: self.username
    }
  end

end
