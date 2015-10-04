import DS from 'ember-data';

export default DS.Model.extend({
  musician: DS.belongsTo("musician"),

  name: DS.attr()
});
