'use strict';
import request from 'supertest'
import app from '../app/server'
import finish from './finish'
import {Article} from '../app/db/schema'
describe('article-api的测试',()=>{
    beforeEach((done)=> {
        Article.find().remove(finish(done));
    });

    it('...',(done)=>{
       request(app)
           .post('/api/article')
           .send({title:'zhangqian',content:'this is my blog'})
           .expect(201,finish(done))
   })
});