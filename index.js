document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayData(data) {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; // Clear any existing data

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'data-item';
        listItem.textContent = `ID: ${item.id}, Title: ${item.title}`;
        dataList.appendChild(listItem);
    });
}
