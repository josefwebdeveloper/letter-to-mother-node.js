const express = require('express');
const router = express.Router();
const config = require('config.json');
const articleModel = require('./article.model');
const articleService = require('./article.service');
const timerService = require('../timer/timer.service');

router.get('/', getAll);
router.post('/create', create);
router.get('/random', getRandom);
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


function getRandom(req, res, next) {
    console.log('getRandom contr');
    articleService.getRandom()
        .then(article => article ? res.json({data: {article: article}}) : res.sendStatus(404))
        .catch(err => next(err));
}
function getById(req, res, next) {
    articleService.getById(req.params.id)
        .then(article => article ? res.json({data: {article: article}}) : res.sendStatus(404))
        .catch(err => next(err));
}
function getAll(req, res, next) {
    console.log('getRandom contr');

    articleService.getAll()
        .then(articles => res.json({status: 'success', message: 'Articles found!!!', data: {articles: articles}}))
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



// function deleteById(req, res, next) {
//     articleModel.findByIdAndRemove(req.params.movieId, function (err, movieInfo) {
//         if (err)
//             next(err);
//         else {
//             res.json({status: 'success', message: 'Movie deleted successfully!!!', data: null});
//         }
//     });
// }
function create(req, res, next) {
    timerService.create().then(()=>res.json({status: 'success', message: 'Timer added successfully!!!', data: null}))
        .catch(err => next(err));
    articleService.create(req.body)
        .then(() => res.json({status: 'success', message: 'Article added successfully!!!', data: null}))
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