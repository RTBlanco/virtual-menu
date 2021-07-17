# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_17_081508) do

  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.integer "resturant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.string "username"
    t.index ["resturant_id"], name: "index_admins_on_resturant_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.integer "resturant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resturant_id"], name: "index_categories_on_resturant_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.decimal "cost"
    t.integer "calories"
    t.integer "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_foods_on_category_id"
  end

  create_table "resturants", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "admins", "resturants"
  add_foreign_key "categories", "resturants"
  add_foreign_key "foods", "categories"
end
