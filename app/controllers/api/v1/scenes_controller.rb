class Api::V1::ScenesController < ApplicationController
  before_action :set_scene, only: %i[show destroy check_position reset_found]

  @@rangeX = 0.02
  @@rangeY = 0.02


  def index
    scenes = Scene.all
    render json: scenes
  end

  def show
    render json: @scene
  end




  def check_position
    response = {}
    x = params[:x].to_f
    y = params[:y].to_f
    characters = @scene.answers
  
    characters.each do |char|
      char_position = char.front_end_position.split(",").map(&:to_f)
      if x.between?(char_position[0] - @@rangeX, char_position[0] + @@rangeX) && y.between?(char_position[1] - @@rangeY, char_position[1] + @@rangeY)
        char.found = true
        char.save
      end
      response[char.character_name.to_sym] = {name: char.character_name, image: char.image, found: char.found}
    end
  

  
    render json: response
  end
  
  def reset_found
    @scene.answers.each do |answer|
      answer.found = false
      answer.save
    end
  end
  

  private

  def scene_params
    params.permit(:x, :y, :character)
  end

  def set_scene
    @scene = Scene.find(params[:id])
  end

  
end



