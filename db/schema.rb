# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141126235959) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "heroes", force: true do |t|
    t.text     "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "bio"
  end

  create_table "sightings", force: true do |t|
    t.integer  "heroId",      null: false
    t.text     "time",        null: false
    t.text     "description", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude",    null: false
    t.float    "longitude",   null: false
  end

  add_index "sightings", ["heroId"], name: "index_sightings_on_heroId", using: :btree

end
