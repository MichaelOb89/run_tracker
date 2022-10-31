const express = require('express')
const router = express.Router()
const activityController = require('./activityController')
const eventController = require('./eventController')
const viewController = require('./viewController')

//============Event Routes===========

//Index

router.get('/events', eventController.index, viewController.index)

// New
router.get('/events/new', viewController.newView)

// Delete
router.delete('/events/:id', eventController.delete, viewController.redirectHome)

// Update
router.put('/events/:id', eventController.update, viewController.redirectHome)

// Create
router.post('/events', eventController.create, viewController.redirectShow)

// Edit
router.get('/events/:id/edit', eventController.show, viewController.edit)

// Show
router.get('/events/:id', eventController.show, viewController.show)

//============Activity Routes===========

//Index

router.get('/runs', activityController.index, viewController.index)

// New
router.get('/runs/new', viewController.newView)

// Delete
router.delete('/runs/:id', activityController.delete, viewController.redirectHome)

// Update
router.put('/runs/:id', activityController.update, viewController.redirectHome)

// Create
router.post('/runs', activityController.create, viewController.redirectShow)

// Edit
router.get('/runs/:id/edit', activityController.show, viewController.edit)

// Show
router.get('/runs/:id', activityController.show, viewController.show)

module.exports = router