// Import models
const Movie = require('./Movie');
const Actor = require('./Actor');
const Character = require('./Character');
const Category = require('./Category');

// Actor has one Character
Actor.hasOne(Character, {
  foreignKey: 'actor_id'
});

// Movie has one Character
Movie.hasOne(Character, {
  foreignKey: 'movie_id'
});

// Category has one Character
Category.hasOne(Character, {
  foreignKey: 'category_id'
});

// Character belongs to an Actor, a Movie, and a Category
Character.belongsTo(Actor, {
  foreignKey: 'actor_id'
});
Character.belongsTo(Movie, {
  foreignKey: 'movie_id'
});
Character.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = {
  Movie,
  Actor,
  Character,
  Category
};