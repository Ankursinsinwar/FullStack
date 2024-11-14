const container = document.querySelector(".container");
const searchButton = document.getElementById('search-button');
const countryInput = document.getElementById('country-input');

searchButton.addEventListener('click', () => {
    const country = countryInput.value.trim();
    if (country) {
        const URL = `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
        fetchData(URL);
    } else {
        alert("Please enter a country name.");
    }
});

function fetchData(URL) {
    container.innerHTML = ''; // Clear previous results
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let collegeNames = [];
            let collegeStates = [];
            let collegeWebpages = [];

            data.forEach(e => {
                collegeNames.push(e.name);
                collegeStates.push(e["state-province"]);
                collegeWebpages.push(e.web_pages[0]);
            });

            const namesDiv = document.createElement('div');
            namesDiv.classList.add('college-names');
            namesDiv.innerHTML = collegeNames.join('<br>');

            const statesDiv = document.createElement('div');
            statesDiv.classList.add('college-states');
            statesDiv.innerHTML = collegeStates.join('<br>');

            const webpagesDiv = document.createElement('div');
            webpagesDiv.classList.add('college-webpages');
            webpagesDiv.innerHTML = collegeWebpages.join('<br>');

            // Append the divs to the container
            container.appendChild(namesDiv);
            container.appendChild(statesDiv);
            container.appendChild(webpagesDiv);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}