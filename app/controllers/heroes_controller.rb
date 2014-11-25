class HeroesController < ApplicationController
	def index
		@heroes = Heroes.all
		render :index
	end
end
