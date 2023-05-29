class Api::V1::ScenesController < ApplicationController
  before_action :set_recipe, only: %i[show destroy]

  def index
    scenes = Scene.all
    render json: scenes
  end

  def show
  end

  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end



