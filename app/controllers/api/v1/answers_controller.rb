class Api::V1::AnswersController < ApplicationController
    before_action :set_scene, only: %i[show destroy check_position]


    
    
  
    private
  
  
    def set_scene
      @scene = Scene.find(params[:id])
    end
  end
  
end