/**
 * Created by ShinokiRyosei on 2016/04/08.
 */

import  { Meteor } from 'meteor/meteor';
import  { Template } from "meteor/templating";
import  { ReactiveDict } from "meteor/reactive-dict";

import { Tasks } from "../api/tasks";

import "./body.html";
import "./task";

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('tasks');
});


Template.body.helpers({
   tasks() {
       var instance  = Template.instance();
       if (instance.state.get('hideCompleted')){
           return Tasks.find({ checked: { $ne : true} }, { sort : { createdAt : -1 } });
       }
       return Tasks.find({}, {sort: { createdAt: -1 } });
   },

    incompleteCount() {
        return Tasks.find({ checked: { $ne: true } }).count();
    }
});

Template.body.events({
    'submit .new-task'(event) {

        event.preventDefault();

        var target = event.target;
        var text = target.text.value;

        Meteor.call('tasks.insert', text);

        target.text.value = '';
    },
    'change .hide-completed input'(event, instance) {
        instance.state.set('hideCompleted', event.target.checked);
    }
});


