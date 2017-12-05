import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Recipes } from '/imports/api/recipe/RecipeCollection';

Template.Profile_Landing.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
  this.context = Profiles.getSchema().namedContext('Profile_Page');
});

Template.Profile_Landing.helpers({
  routeUserName() {
    return FlowRouter.getParam('username');
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));
  },
  myRecipes() {
    console.log(Recipes.dumpAll({ username: FlowRouter.getParam('username') }));
    return Recipes.dumpAll({ username: FlowRouter.getParam('username') });
  },
});
