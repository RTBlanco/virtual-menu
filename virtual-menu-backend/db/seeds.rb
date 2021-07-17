# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
res = Resturant.create(name: "Mcdonals")
res.admin = Admin.new(name: "Ronny", username: "TheKing", password: "12345")
res.save
res.categories.build(name: "Drinks")
res.categories.first.foods.build(name: "Coke", cost: 1.00, calories: 250)
res.save
