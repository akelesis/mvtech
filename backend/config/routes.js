module.exports = app => {
    app.post('/contact', app.api.mailing.contact)
    app.post('/quote', app.api.mailing.quote)
}