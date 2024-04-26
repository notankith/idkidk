// app.js
document.addEventListener('DOMContentLoaded', function () {
    const addStickerBtn = document.getElementById('addStickerBtn');
    const stickerForm = document.getElementById('stickerForm');

    addStickerBtn.addEventListener('click', function () {
        const productName = document.getElementById('productName').value;
        const productCode = document.getElementById('productCode').value;
        const mrp = document.getElementById('mrp').value;
        const expiry = document.getElementById('expiry').value;
        const contact = document.getElementById('contact').value;

        const stickerData = {
            productName: productName,
            productCode: productCode,
            mrp: mrp,
            expiry: expiry,
            contact: contact
        };

        axios.post('/api/stickers', stickerData)
            .then(function (response) {
                console.log(response.data);
                // Clear form fields after successful submission
                stickerForm.reset();
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});
