import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    window.location.replace('https://www.instagram.com/leoscircus/');
  }
});
