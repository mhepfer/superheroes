class Api::SightingsController < ApplicationController
	def index
		@sightings = Sightings.all
	end
end
