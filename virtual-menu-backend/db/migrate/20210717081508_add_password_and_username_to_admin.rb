class AddPasswordAndUsernameToAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :password_digest, :string
    add_column :admins, :username, :string
  end
end
