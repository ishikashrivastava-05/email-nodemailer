const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'margot.gorczany87@ethereal.email',
            pass: 'JBTymYBjSG5EHk1aKy'
        }
    });
    let info = await transporter.sendMail({
        from: '"Ishika shrivastava 👻" <margot.gorczany87@ethereal.email>', // sender address
        to: "shrivastavaishika373@gmail.com", // list of receivers
        subject: "Hello ishika", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    console.log("Message send: %s", info.messageId)
    res.json(info)
};

module.exports = sendMail