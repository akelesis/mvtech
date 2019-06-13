module.exports = app => {
    app.post('/contact', app.api.mailing.contact)
    app.post('/contact', app.api.mailing.quote)
}