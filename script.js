document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate-button');
    const presetsList = document.getElementById('presets-list');
    
    // Event listener for the generate button
    generateButton.addEventListener('click', function () {
        const productName = document.getElementById('productName').value;
        const mrp = document.getElementById('mrp').value;
        const manufactureDate = document.getElementById('manufactureDate').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const contact = document.getElementById('contact').value;
        
        // Create a sticker object with the form data
        const sticker = {
            productName: productName,
            mrp: mrp,
            manufactureDate: manufactureDate,
            expiryDate: expiryDate,
            contact: contact
        };
        
        // Generate sticker based on the form data (you can implement this function)
        generateSticker(sticker);
    });
    
    // Function to generate and display the sticker
    function generateSticker(sticker) {
        // Here you can implement code to generate and display the sticker
        // For simplicity, let's just log the sticker object for now
        console.log(sticker);
    }
});
