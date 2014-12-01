class Api::HeroesController < ApplicationController
	def index
		@heroes = Heroes.all
	end

	def show
		@hero = Heroes.find(params[:id])
		render :show
	end

	def params
		params.require(:heroes).permit(:name, :bio)
	end

end
