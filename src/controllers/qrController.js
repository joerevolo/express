const QRCode = require('qrcode');

exports.showForm = (req, res) => {
    res.render('qrGenerator');
};

exports.generateQr = async (req, res) => {
    const text = req.body.qrText;
    console.log(req.body.qrText);
    try {
        const qrCodeDataURL = await QRCode.toDataURL(text);
        res.render('qrGenerator', { qrCode: qrCodeDataURL, inputText: text });
        console.log("qr generado: "+qrCodeDataURL);
    } catch (err) {
        console.error(err);
        res.render('qrGenerator', { error: 'Error al generar el código QR.', inputText: text });
    }
};
