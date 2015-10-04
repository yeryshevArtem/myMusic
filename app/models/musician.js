import DS from 'ember-data';

export default DS.Model.extend({
  tracks: DS.hasMany("track"),

  name: DS.attr(),
  surname: DS.attr(),
  fullName: function () {
    return this.get("name") + " " + this.get("surname");
  }.property("name", "surname"),
  age: DS.attr()
});
