# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,"

res = Resturant.create(name: "Mcdonals", about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius laborum, officia dignissimos eveniet sit nam iusto soluta consequatur saepe amet ratione sed aperiam illum esse quod libero. Quae, labore!")
res.image.attach(io: File.open('db/images/banner.jpg'), filename: 'banner.jpg')
res.admins.build(name: "Ronny", username: "TheKing", password: "12345")
res.save

drink = res.categories.build(name: "Drinks")
pasta = res.categories.build(name: "Pasta")
steak = res.categories.build(name: "Steak")
sandwiches = res.categories.build(name: "Sandwiches")
desert = res.categories.build(name: "Desert")

coke = res.categories.first.foods.build(name: "Coke", cost: 1.00, calories: 250, description: description)
coke.image.attach(io: File.open('db/images/drink.jpg'), filename: 'drink.jpg')

sprite = res.categories.first.foods.build(name: "Sprite", cost: 1.00, calories: 250, description: description)
sprite.image.attach(io: File.open('db/images/drink.jpg'), filename: 'drink.jpg')

# res.categories.first.foods.build(name: "OrangeJuice", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# res.categories.first.foods.build(name: "Lemonade", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# res.categories.first.foods.build(name: "DrPeper", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# res.categories.first.foods.build(name: "Corona", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")

mac = pasta.foods.build(name: "Macoronii", cost: 1.00, calories: 250, description: description)
mac.image.attach(io: File.open('db/images/pasta.png'), filename: 'pasta.png')

las = pasta.foods.build(name: "Lasanga", cost: 1.00, calories: 250, description: description)
las.image.attach(io: File.open('db/images/pasta.png'), filename: 'pasta.png')

# pasta.foods.build(name: "Fettuccine", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# pasta.foods.build(name: "Ravioli", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# pasta.foods.build(name: "speghetti", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")

sir = steak.foods.build(name: "sirlon", cost: 1.00, calories: 250, description: description)
sir.image.attach(io: File.open('db/images/steak.jpg'), filename: 'steak.jpg')

rib = steak.foods.build(name: "RibEye", cost: 1.00, calories: 250, description: description)
rib.image.attach(io: File.open('db/images/steak.jpg'), filename: 'steak.jpg')

# steak.foods.build(name: "T-Bone", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# steak.foods.build(name: "Yakiniku", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# steak.foods.build(name: "FiletMignon", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# steak.foods.build(name: "SuperBull", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,") 

cheese = sandwiches.foods.build(name: "cheeseburger", cost: 1.00, calories: 250, description: description)
cheese.image.attach(io: File.open('db/images/burger.jpg'), filename: 'burger.jpg')

ham = sandwiches.foods.build(name: "ham Burger", cost: 1.00, calories: 250, description: description)
ham.image.attach(io: File.open('db/images/burger.jpg'), filename: 'burger.jpg')

# sandwiches.foods.build(name: "Double Stack", cost: 1.00, calories: 250)
# sandwiches.foods.build(name: "Sunny SideBurger", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# sandwiches.foods.build(name: "india andwich", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# sandwiches.foods.build(name: "Super burger", cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")

ice = desert.foods.build(name: "ice cream",  cost: 1.00, calories: 250, description: description)
ice.image.attach(io: File.open('db/images/desert.jpg'), filename: 'desert.jpg')

van = desert.foods.build(name: "Vanilla ice Cream",  cost: 1.00, calories: 250, description: description)
van.image.attach(io: File.open('db/images/desert.jpg'), filename: 'desert.jpg')

# desert.foods.build(name: "cake ice Cream",  cost: 1.00, calories: 250)
# desert.foods.build(name: "Chocolate ice Cream",  cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# desert.foods.build(name: "Chocolate cake",  cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")
# desert.foods.build(name: "Vanilla cake",  cost: 1.00, calories: 250, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
# molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
# numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
# optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
# obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
# nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,")



pasta.save
steak.save
sandwiches.save
desert.save
res.save
