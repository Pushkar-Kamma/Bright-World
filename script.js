
function searchByName() {
    const input = document.getElementById('nameInput').value;
    const message = document.getElementById('searchMessage');
    if (input) {
        message.textContent = `Searching for "${input}"...`;
    } else {
        message.textContent = 'Please enter a waste item name.';
    }
}

async function searchWasteByName() {
    try {
        // Load JSON data from file using Fetch API
        const response = await fetch('waste.json');
        
        if (!response.ok) {
            throw new Error('Failed to fetch waste data');
        }

        // Parse the JSON data
        const wasteData = await response.json();

        // Get the value entered by the user
        const searchValue = document.getElementById('wasteSearchInput').value.trim().toLowerCase();
        const resultDiv = document.getElementById('searchResults');

        // Check if searchValue is present in the JSON data (case-insensitive)
        const foundItem = wasteData.find(item => item.name.toLowerCase() === searchValue);

        if (foundItem) {
            resultDiv.textContent = `Found: ${foundItem.name}, Type: ${foundItem.type}`;
        } else {
            resultDiv.textContent = `'${searchValue}' is not found in the waste data.`;
        }
    } catch (error) {
        console.error('Error fetching the waste data:', error);
        document.getElementById('searchResults').textContent = 'Error fetching waste data. Please try again later.';
    }
}
