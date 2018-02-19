// Definition of the links collection

import { Mongo } from 'meteor/mongo';
//import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

Links.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});

const LinkSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
    },
    url: {
        type: String,
        label: "URL"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){ return this.userId; }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){ return new Date(); }
    }
});

Links.attachSchema(LinkSchema);
