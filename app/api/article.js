'use strict';
import express from 'express';
import _ from 'lodash';
import {Article} from '../db/schema';
const router = express.Router();
router.post('/', function (req, res, next) {
    const data = req.body;
    if (_.isEmpty(data)) {
        res.sendStatus(400);
        // return res.status(400).send('提交不能为空！');

    } else {
        new Article(data).save(err=> {
            if (err) return next(err);
             res.sendStatus(201);
            // return res.status(201).send('提交成功！');


        })
    }

});
// router.delete('/texts/:id', function(req, res, next) {
//     const id = req.params.id;
//     Article.find({_id:id}).remove((err, data)=>{
//         if(err) return next(err);
//         if(data) {
//             res.sendStatus(204);
//         } else {
//             res.sendStatus(404);
//         }
//     });
// });

router.get('/', function (req, res, next) {
    Article.find((err, articles)=> {
        if (err) return next(err);
        res.json(articles);
    })
});

export default router;