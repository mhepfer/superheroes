class Api::HeroesController < ApplicationController

	def index
		@heroes = Heroes.all
	end

	def show
		@hero = Heroes.find(params[:id])
		render :show
	end

	def create
		@hero = Heroes.new(hero_params)
		if @hero.save
			render 'show'
		else
			render json: @hero.errors.full_messages, status: 422
		end
	end

	def hero_params
		if params[:hero]
			params.require(:hero).permit(:name, :bio)
		else
			params.require(:heroes).permit(:name, :bio)
		end

	end
end