# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

heroes = [
	[ 
		"Captain America",
		"In World War II patriotic solider Steve Rogers recipient of the 'Super Soldier Serum' became the living symbol of freedom, Captain America. Left for dead while frozen in ice, the star-spangled hero with an indestructible shield awoke years later to continue his never-ending battle for liberty.",
		"https://www.filepicker.io/api/file/mxvyX0f0Sb6e7eFXe6D6"
	],
	[
		"Batman",
		"As a boy, Bruce Wayne's parents were mugged and killed. He swore vengence, traveling the world to turn himself into the ultimate crime fighter. Today he is Gotham's Dark Knight.",
		"https://www.filepicker.io/api/file/77Pl1y1vQpYyYygaWjaL"
	],
	[
		"Superman",
		"From planet Krypton, Superman's parents sent him to Earth as a baby. On Earth, Superman has many superpowers including super strength, speed, hearing; heat and xray vision; and flight. He uses these powers to fight injustice throughout the world.",
		"https://www.filepicker.io/api/file/98FTtcMXRefc84dJ12LU"
	],
	[
		"The Flash",
		"The fastest man alive. Flash uses his super speed to protect the world from impending doom.",
		"https://www.filepicker.io/api/file/nVCgRyLZT6GDte55bxVQ"
	],
	[
		"Iron Man",
		"Billionaire genius, this playboy fights evil doers wearing a flying supersuit.",
		"https://www.filepicker.io/api/file/5TaegwTESWuyN4grEQUy"
	]
]

heroes.each do |name, bio, filepicker_url_icon|
	Heroes.create!(name: name, bio: bio, filepicker_url_icon: filepicker_url_icon)
end

Sightings.create( 
				heroId: 3,
				description: "I saw him at the gym. He was pretending to work out",
				latitude: 37.788233,
				longitude: -122.400614,
				time: DateTime.strptime("09/14/2009 11:00", "%m/%d/%Y %H:%M"),
				)
