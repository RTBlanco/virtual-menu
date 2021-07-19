# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
res = Resturant.create(name: "Mcdonals")
res.admins.build(name: "Ronny", username: "TheKing", password: "12345")
res.save

drink = res.categories.build(name: "Drinks")
pasta = res.categories.build(name: "Pasta")
steak = res.categories.build(name: "Steak")
sandwiches = res.categories.build(name: "Sandwiches")
desert = res.categories.build(name: "Desert")

res.categories.first.foods.build(name: "Coke", cost: 1.00, calories: 250)
res.categories.first.foods.build(name: "Sprite", cost: 1.00, calories: 250)
res.categories.first.foods.build(name: "OrangeJuice", cost: 1.00, calories: 250)
res.categories.first.foods.build(name: "Lemonade", cost: 1.00, calories: 250)
res.categories.first.foods.build(name: "DrPeper", cost: 1.00, calories: 250)
res.categories.first.foods.build(name: "Corona", cost: 1.00, calories: 250)

pasta.foods.build(name: "Macoronii", cost: 1.00, calories: 250)
pasta.foods.build(name: "Lasanga", cost: 1.00, calories: 250)
pasta.foods.build(name: "Fettuccine", cost: 1.00, calories: 250)
pasta.foods.build(name: "Ravioli", cost: 1.00, calories: 250)
pasta.foods.build(name: "speghetti", cost: 1.00, calories: 250)

steak.foods.build(name: "sirlon", cost: 1.00, calories: 250)
steak.foods.build(name: "RibEye", cost: 1.00, calories: 250)
steak.foods.build(name: "T-Bone", cost: 1.00, calories: 250)
steak.foods.build(name: "Yakiniku", cost: 1.00, calories: 250)
steak.foods.build(name: "FiletMignon", cost: 1.00, calories: 250)
steak.foods.build(name: "SuperBull", cost: 1.00, calories: 250) 

sandwiches.foods.build(name: "cheeseburger", cost: 1.00, calories: 250)
sandwiches.foods.build(name: "ham Burger", cost: 1.00, calories: 250)
sandwiches.foods.build(name: "Double Stack", cost: 1.00, calories: 250)
sandwiches.foods.build(name: "Sunny SideBurger", cost: 1.00, calories: 250)
sandwiches.foods.build(name: "india andwich", cost: 1.00, calories: 250)
sandwiches.foods.build(name: "Super burger", cost: 1.00, calories: 250)

desert.foods.build(name: "ice cream",  cost: 1.00, calories: 250)
desert.foods.build(name: "Vanilla ice Cream",  cost: 1.00, calories: 250)
desert.foods.build(name: "cake ice Cream",  cost: 1.00, calories: 250)
desert.foods.build(name: "Chocolate ice Cream",  cost: 1.00, calories: 250)
desert.foods.build(name: "Chocolate cake",  cost: 1.00, calories: 250)
desert.foods.build(name: "Vanilla cake",  cost: 1.00, calories: 250)



pasta.save
steak.save
sandwiches.save
desert.save
res.save
