let qr;

function generateQRCode() {
    const qrInput = document.getElementById("qrInput").value;
    if (!qrInput) {
        alert("Please enter text or URL");
        return;
    }

    if (!qr) {
        qr = new QRious({
            element: document.createElement("canvas"),
            size: 280,
            value: qrInput
        });
        document.getElementById("qrcode").appendChild(qr.element);
    } else {
        qr.value = qrInput;
    }
}

function downloadQRCode() {
    if (!qr) {
        alert("Please generate a QR code first!");
        return;
    }

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qr.toDataURL("image/png");
    link.click();
}
