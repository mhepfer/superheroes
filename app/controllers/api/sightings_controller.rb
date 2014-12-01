class Api::SightingsController < ApplicationController
	def index
		@sightings = Sightings.all.includes(:superhero)
	end

	def show
		@sighting = Sightings.find(params[:id])
		render :show
	end

	def create
		@sighting = Sightings.new(sighting_params)
		if @sighting.save!
			render 'show'
		else
			render json: @sighting.errors.full_messages
		end
	end

	def sighting_params
		if params[:sighting]
			params.require(:sighting).permit(:heroId, :time, :description, :latitude, :longitude)
		else
			params.require(:sightings).permit(:heroId, :time, :description, :latitude, :longitude)
		end
	end
end