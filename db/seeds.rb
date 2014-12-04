# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

heroes = {
	1=>{ 
				name: "Captain America",
				bio: "In World War II patriotic solider Steve Rogers recipient of the 'Super Soldier Serum' became the living symbol of freedom, Captain America. Left for dead while frozen in ice, the star-spangled hero with an indestructible shield awoke years later to continue his never-ending battle for liberty."
			},
	2=>{
				name: "Batman"
				bio: "As a boy, Bruce Wayne's parents were mugged and killed. He swore vengence, traveling the world to turn himself into the ultimate crime fighter. Today he is Gotham's Dark Knight."
			},
	3=>{
				name: "Superman"
				bio: "From planet Krypton, Superman's parents sent him to Earth as a baby. On Earth, Superman has many superpowers including super strength, speed, hearing; heat and xray vision; and flight. He uses these powers to fight injustice throughout the world."
			},
	4=>{
				name: "The Flash"
				bio: "The fastest man alive. Flash uses his super speed to protect the world from impending doom."
			},
	5=>{
				name: "Iron Man"
				bio: "Billionaire genius, this playboy fights evil doers wearing a flying supersuit."
			},
	6=>{
				name: "The Hulk"
				bio: 'Caught in the blast of gamma radiation, brilliant scientist Bruce Banner is cursed to transform in times of stress into the living engine of destruction known as THE INCREDIBLE HULK.' 
		  }
}

sightings = {
	1=>{
				heroId: 6,
				description: "I saw him at the gym. He was pretending to work out",
				latitude: 37.788233,
				longitude: -122.400614,
				time: DateTime.strptime("09/14/2009 11:00", "%m/%d/%Y %H:%M"),
		 },
}
Heroes.create!(heroes)
Sightings.create!(sightings)