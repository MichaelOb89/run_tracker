const express = require('express')
const router = express.Router()
const activityController = require('./activityController')
const eventController = require('./eventController')
const viewController = require('./viewController')

//============Event Routes===========

//Index

router.get('/events', eventController.index, viewController.eventIndex)

// New
router.get('/events/new', viewController.eventNewView)

// Delete
router.delete('/events/:id', eventController.delete, viewController.redirectHome)

// Update
router.put('/events/:id', eventController.update, viewController.redirectHome)

// Create
router.post('/events', eventController.create, viewController.eventRedirectShow)

// Edit
router.get('/events/:id/edit', eventController.show, viewController.eventEdit)

// Show
router.get('/events/:id', eventController.show, viewController.eventShow)

// //============Activity Routes===========

//Index

router.get('/runs', activityController.index, viewController.runIndex)

// New
router.get('/runs/new', viewController.runNewView)

// Delete
router.delete('/runs/:id', activityController.delete, viewController.redirectHome)

// Update
router.put('/runs/:id', activityController.update, viewController.redirectHome)

// Create
router.post('/runs', activityController.create, viewController.redirectShow)

// Edit
router.get('/runs/:id/edit', activityController.show, viewController.runEdit)

// Show
router.get('/runs/:id', activityController.show, viewController.runShow)

module.exports = router