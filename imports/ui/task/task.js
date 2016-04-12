/**
 * Created by ShinokiRyosei on 2016/04/12.
 */
import Template  from 'meteor/templating';

import { Tasks } from '../../api/tasks';

// import "/imports/ui/task/task.html";
import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this.id, {
            $set: { checked: this.checked }
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    }

});