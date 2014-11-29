class Api::SightingsController < ApplicationController
	def index
		@sightings = Sightings.all.includes(:superhero)
	end

	def show
		@sighting = Sightings.find(params[:id])
		render :show
	end

	def new
		@sighting = Sightings.new(params)
		if @sighting.save!
			render json: @sighting
		else
			render json: @sighting
		end
	end

	def sightingParams
		params.require(:sightings).permit(:heroId, :time, :description, :latitude, :longitude)
	end
end