import mongoose from 'mongoose';

module.exports = {
    connect: function () {
        mongoose.connect('mongodb://localhost/zhangqian-blog');
    },
    close: function () {
        mongoose.connection.close();
    }
};
