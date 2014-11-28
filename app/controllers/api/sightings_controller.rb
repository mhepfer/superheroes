class Api::SightingsController < ApplicationController
	def index
		@sightings = Sightings.all.includes(:superhero)
	end

	def show
		@sighting = Sightings.find(params[:id])
		render :show
	end

	def new
		@sighting = Sightings.new(sighting_params)


	end

	def sightingParams
		...require(sightings).permit(:heroId, )
	end
end