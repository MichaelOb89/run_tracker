const RESOURCE_PATH = '/runs'

const viewController = {
    index (req, res, next){
        res.render('runs/Index', res.locals.data)
    },
    newView(req, res, next) {
        res.render('runs/New')
    },
    edit (req, res, next) {
        res.render('runs/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('runs/Show', res.locals.data)
      },
      redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
      },
      redirectShow (req, res, next) {
        const runId = req.params.id || res.locals.data.activity._id
        res.redirect(`${RESOURCE_PATH}/${runId}`)
      }
}

module.exports = viewController