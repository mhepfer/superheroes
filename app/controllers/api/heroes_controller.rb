class Api::HeroesController < ApplicationController
	def index
		@heroes = Heroes.all
	end
end
