const RESOURCE_PATH = '/runs'

const viewController = {
  runIndex (req, res, next) {
    res.render('runs/Index', res.locals.data)
  },
  eventIndex (req, res, next) {
    res.render('events/Index', res.locals.data)
  },
  runNewView (req, res, next) {
    res.render('runs/New')
  },
  eventNewView (req, res, next) {
    res.render('events/New')
  },
  runEdit (req, res, next) {
    res.render('runs/Edit', res.locals.data)
  },
  eventEdit (req, res, next) {
    res.render('events/Edit', res.locals.data)
  },
  runShow (req, res, next) {
    res.render('runs/Show', res.locals.data)
  },
  eventShow (req, res, next) {
    res.render('events/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const runId = req.params.id || res.locals.data.activity._id
    res.redirect(`${RESOURCE_PATH}/${runId}`)
  },
  eventRedirectShow (req, res, next) {
    const eventId = req.params.id || res.locals.data.event._id
    res.redirect(`events/${eventId}`)
  }

}

module.exports = viewController
