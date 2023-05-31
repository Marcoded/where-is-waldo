# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# size  "3000,1975"
spaceScene = Scene.find(1)

answer1 = Answer.new
answer1.scene_id = spaceScene.id
answer1.character_name = "Wizard WhiteBeard"
answer1.absolute_position= "2334,1160"
answer1.relative_position = "0.7,0.58"
answer1.save

answer2 = Answer.new
answer2.scene_id = spaceScene.id
answer2.character_name = "Odlaw"
answer2.absolute_position = "212,1366"
answer2.relative_position = "0.07,0.69"

answer2.save

answer3 = Answer.new
answer3.scene_id = spaceScene.id
answer3.character_name = "Waldo"
answer3.absolute_position = "1208,1239"
answer3.relative_position = "0.40,0.62"
answer3.save