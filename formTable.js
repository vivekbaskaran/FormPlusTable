document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodSelect = document.getElementById('food')
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        let selectedFoods;
        if (foodSelect) { // Check if the select element exists
            selectedFoods = Array.from(foodSelect.options).filter(option => option.selected).map(option => option.value);  
            // Check if at least 2 food options are selected
            if (selectedFoods.length < 2) {
                alert('Please select at least 2 food options.');
                return; // Stop form submission
            }
        } else {
            console.error('The select element with id "food" was not found.');
            return; // Stop form submission
        }
        // Function to get selected values from a multi-select dropdow
        
        // Append data to the table
        const table = document.getElementById('dataTable');
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${selectedFoods}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        
        // Clear the form fields
        form.reset();
    });
});