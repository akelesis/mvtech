const nodemail = require('nodemailer')

module.exports = app =>{
    const contact = async (req, res) =>{
        const message = {...req.body}

        const transporter = nodemail.createTransport({
            service: 'mail.mvtechsolutions.com ',
            auth:{
                user: 'clients@mvtechsolutions.com',
                pass: 'mvtech2019solutions'
            }
        })

        const mailOptions = {
            from: `clients@mvtechsolutions.com`,
            to: 'marcus@mvtechsolutions.com',
            subject: `${message.subject}`,
            text: `Mensagem enviada por ${message.name} <${message.email}>: ${message.text}`
        }

        await transporter.sendMail(mailOptions, function(err, info){
            if(err){
                res.status(500).send()
            }
            else{
                res.status(204).send()
            }
        })
    }

    const quote = async (req, res) =>{
        const message = {...req.body}

        const transporter = nodemail.createTransport({
            service: 'mail.mvtechsolutions.com ',
            auth:{
                user: 'quotes@mvtechsolutions.com',
                pass: 'mvtech2019solutions'
            }
        })

        const mailOptions = {
            from: `quotes@mvtechsolutions.com`,
            to: 'marcus@mvtechsolutions.com',
            subject: `Requisição de orçamento`,
            text: `
                Mensagem enviada por ${message.name} <${message.email}>: 
                ${message.area} - ${message.service} 
                ${message.text}
            `
        }

        await transporter.sendMail(mailOptions, function(err, info){
            if(err){
                res.status(500).send()
            }
            else{
                res.status(204).send()
            }
        })
    }
}