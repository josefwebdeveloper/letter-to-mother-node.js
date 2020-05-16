const express = require('express');
const router = express.Router();
const config = require('config.json');
const timerModel = require('./timer.model');
const timerService = require('./timer.service');
// const mongoConnectionString = process.env.MONGODB_URI || config.connectionString;
// const agenda = new Agenda({db: {address: mongoConnectionString}});
//
// agenda.define('console', async job => {
//     await console.log('Agenda')
// });
// (async function() { // IIFE to give access to async/await
//     await agenda.start();
//
//     await agenda.every('1 seconds', 'console');
//
// })();
router.get('/', getTimer);
router.post('/create', create);
// router.post('/update', update);
router.get('/:articleId', getById);
// router.put('/:articleId', updateById);
// router.delete('/:articleId', deleteById);

module.exports = router;

// module.exports = {
// function getById(req, res, next) {
//     console.log(req.body);
//     articleModel.findById(req.params.articleId, function (err, article) {
//         if (err) {
//             next(err);
//         } else {
//             res.json({status: 'success', message: 'Article found!!!', data: {article: article}});
//         }
//     });
// }



function getById(req, res, next) {
    articleService.getById(req.params.id)
        .then(article => article ? res.json({data: {article: article}}) : res.sendStatus(404))
        .catch(err => next(err));
}
function getTimer(req, res, next) {
    console.log('getTimer contr');

    timerService.getTimer()
        .then(timer => res.json({status: 'success', message: 'timer load!!!', data: {timer: timer}}))
        .catch(err => next(err));
}
// function getAll(req, res, next) {
//     let articleList = [];
//
//     articleModel.find({}, function (err, articles) {
//         if (err) {
//             next(err);
//         } else {
//             for (let article of articles) {
//                 articleList.push({id: article._id, article: article.article, type: article.type});
//             }
//             res.json({status: 'success', message: 'Movies list found!!!', data: {movies: moviesList}});
//
//         }
//
//     });
// }

// function updateById(req, res, next) {
//     articleModel.findByIdAndUpdate(req.params.movieId, {name: req.body.name}, function (err, movieInfo) {
//
//         if (err)
//             next(err);
//         else {
//             res.json({status: 'success', message: 'Movie updated successfully!!!', data: null});
//         }
//     });
// }




function create(req, res, next) {
    timerService.create(req.body)
        .then(() => res.json({status: 'success', message: 'Timer created successfully!!!', data: null}))
        .catch(err => next(err));
}
// function create(req, res, next) {
//     articleModel.create({name: req.body.name, released_on: req.body.released_on}, function (err, result) {
//         if (err)
//             next(err);
//         else
//             res.json({status: 'success', message: 'Movie added successfully!!!', data: null});
//
//     });
// }

// }