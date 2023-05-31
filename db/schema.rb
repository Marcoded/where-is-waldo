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

ActiveRecord::Schema[7.0].define(version: 2023_05_31_085855) do
  create_table "answers", force: :cascade do |t|
    t.integer "scene_id", null: false
    t.string "character_name"
    t.string "absolute_position"
    t.string "relative_position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "found", default: false
    t.string "front_end_position"
    t.string "image"
    t.index ["scene_id"], name: "index_answers_on_scene_id"
  end

  create_table "scenes", force: :cascade do |t|
    t.string "imgLink"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "size"
  end

  add_foreign_key "answers", "scenes"
end
