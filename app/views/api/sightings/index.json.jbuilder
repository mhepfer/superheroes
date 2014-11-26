json.extract! @sightings, :id, :heroId, :location, :time, :description, :created_at, :updated_at

json.members @sighting.members do |member|
	json.id member.id
	json.heroId member.heroId
	json.location member.location
	json.time member.time
	json.description member.description
end
