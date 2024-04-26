// app.js
document.addEventListener('DOMContentLoaded', function () {
    const addStickerBtn = document.getElementById('addStickerBtn');
    const stickerForm = document.getElementById('stickerForm');
    const stickerList = document.getElementById('stickerList');

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
                // Add the new sticker to the sticker list
                const newSticker = response.data;
                const stickerElement = document.createElement('div');
                stickerElement.classList.add('bg-gray-200', 'p-4', 'mb-4');
                stickerElement.innerHTML = `
                    <p><strong>Product Name:</strong> ${newSticker.productName}</p>
                    <p><strong>Product Code:</strong> ${newSticker.productCode}</p>
                    <p><strong>MRP:</strong> ${newSticker.mrp}</p>
                    <p><strong>Expiry:</strong> ${newSticker.expiry}</p>
                    <p><strong>Contact:</strong> ${newSticker.contact}</p>
                `;
                stickerList.appendChild(stickerElement);
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});
