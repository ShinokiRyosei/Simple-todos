/**
 * Created by ShinokiRyosei on 2016/04/12.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';
import "./task.html";
const task = 'task.html';
Template.task.helpers({
    isOwner() {
        return Meteor.userId() === this.owner;
    }
});

Template.task.events({

    'click .toggle-checked'() {
        Meteor.call('tasks.setChecked', this._id, !this.checked);
    },
    'click .delete'() {
        Meteor.call('tasks.remove', this._id);
    },
    'click .toggle-private'() {
        Meteor.call('tasks.setPrivate', this._id, !this.private);
    }

});